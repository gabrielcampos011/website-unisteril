# Elementor Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Gerar 3 arquivos JSON Elementor (header, page, footer) fiéis ao design do site Unistéril.

**Architecture:** Cada arquivo segue a estrutura `{content, page_settings, version, title, type}` do Elementor 0.4. Containers Flexbox aninhados com widgets nativos. Sem plugins de terceiros.

**Tech Stack:** JSON puro, Elementor 3.x nativo, Font Awesome 5 Free.

## Global Constraints

- Versão Elementor: `"0.4"`
- Sem campos Happy Addons (`ha_*`) ou outros plugins
- IDs: strings hex de 8 chars, únicas por arquivo
- Imagens: `{"url": "", "id": "", "size": "", "alt": "", "source": "library"}`
- Paleta: dark-green `#0B3C24`, brand-green `#00B050`, light-green `#DDF2E4`, bg-light `#F4F8F5`, text-dark `#1A1A1A`, text-muted `#555555`
- Fonte: Inter (ou padrão Elementor se não configurada)
- FA5 Free: `fas`, `far`, `fab` prefixes
- Saída em: `elementor-templates/`

---

### Task 1: Setup + Header JSON

**Files:**
- Create: `elementor-templates/unisteril-header.json`

**Estrutura:**
```
Container [sticky, full-width, bg: #FFFFFF, border-bottom]
└── Inner Container [row, boxed, space-between, align-center, h: 80px]
    ├── heading widget     → "Unistéril" (logo, #0B3C24, bold, 20px)
    ├── nav-menu widget    → Soluções / Diferenciais / Blog / Contato
    └── button widget      → "Área do Cliente" (#00B050, rounded, hidden mobile)
```

- [ ] Criar pasta `elementor-templates/`
- [ ] Escrever `unisteril-header.json` completo
- [ ] Validar JSON: `node -e "JSON.parse(require('fs').readFileSync('elementor-templates/unisteril-header.json','utf8')); console.log('OK')"`

---

### Task 2: Page JSON — Hero + Metrics

**Files:**
- Create: `elementor-templates/unisteril-page.json` (iniciar arquivo)

**Seções incluídas:**

HeroSection:
```
Container [min-height: 100vh, bg: #0B3C24, flex-center, text-center]
└── Inner Container [max-width: 900px, column, gap: 24px, align-center]
    ├── text-editor   → "Qualidade em" (color: #DDF2E4, 18px, fadeInUp 0ms)
    ├── heading (h1)  → "processamento e\n<span #00B050>esterilização</span>"
    │                   (64px desktop / 40px mobile, branco, fadeInUp 200ms)
    └── button        → "Saiba mais" (bg: #FFFFFF, color: #0B3C24, lg, fadeInUp 400ms)
```

MetricsSection:
```
Container [bg: #F4F8F5, padding: 80px 0]
└── Inner Container [boxed, column, gap: 48px]
    ├── heading       → "A Unistéril <span #00B050>em números</span>"
    ├── Grid [4 col desktop / 2 col mobile]
    │   ├── counter   → prefix "+", ending: 30,  label: "anos de tradição"
    │   ├── counter   → prefix "+", ending: 20,  label: "clínicas e hospitais atendidos"
    │   ├── counter   → prefix "+", ending: 85,  label: "cidades atendidas"
    │   └── counter   → prefix "+", ending: 15,  suffix: "mil",
    │                   label: "itens processados apenas em 2025"
    └── button        → "Saiba mais" (bg: #00B050)
```

- [ ] Escrever as 2 primeiras seções no array `content` do page JSON
- [ ] Validar JSON parcial

---

### Task 3: Page JSON — Solutions + CTA Interrupt

**Seções incluídas:**

SolutionsSection:
```
Container [id="soluções", bg: #FFFFFF, padding: 80px 0]
├── Inner Container [boxed] → heading + subtitle
└── Grid [4 col / 2 mobile, no gap, min-height: 480px]
    ├── Container [bg: linear-gradient(135deg, #0B3C24, #0d4a2c), flex-col, justify-end, p: 32px]
    │   custom_css: hover scale(1.05)
    │   ├── icon     → fas fa-flask (#00B050, 36px, position abs top-left via CSS)
    │   ├── heading  → "Processamento" (branco, bold, 20px)
    │   └── button   → "Saiba mais" (outline light-green, icon: fas fa-arrow-right right)
    ├── Container [bg: linear-gradient(135deg, #0d4a2c, #0B3C24)]
    │   └── (mesma estrutura) → fas fa-wind | "Esterilização por Óxido de Etileno"
    ├── Container [bg: linear-gradient(135deg, #0B3C24, #0a3320)]
    │   └── (mesma estrutura) → fas fa-thermometer-half | "Esterilização a Vapor"
    └── Container [bg: linear-gradient(135deg, #0a3320, #0B3C24)]
        └── (mesma estrutura) → fas fa-industry | "Esterilização Industrial (OXIETO)"
```

CtaInterruptSection:
```
Container [bg: #0B3C24, padding: 80px 0, text-center]
└── Inner Container [max-width: 768px, column, align-center, gap: 24px]
    ├── heading  → "Fale aqui com um de nossos <span #00B050>especialistas</span>"
    └── button   → "Clique aqui" (bg: #FFFFFF, color: #0B3C24, icon: fas fa-phone left)
```

- [ ] Adicionar seções 3 e 4 ao `content` do page JSON
- [ ] Validar JSON parcial

---

### Task 4: Page JSON — Differentials + Manifesto

**Seções incluídas:**

DifferentialsSection:
```
Container [id="diferenciais", bg: #F4F8F5, padding: 80px 0]
└── Inner Container [boxed, column]
    ├── heading       → "Nossos <span #00B050>diferenciais</span>"
    └── Grid [3 col desktop / 1 mobile, gap: 24px]
        6x icon-box widgets:
        ├── fas fa-shield-alt  | "Segurança no processamento"        | "Rigorosos padrões de qualidade"
        ├── fas fa-award       | "Programa de Excelência Operacional" | "Boas práticas internacionais..."
        ├── fas fa-barcode     | "Sistema de Rastreabilidade"         | "Controle online dos seus materiais"
        ├── fas fa-truck       | "Logística Eficiente"                | "Entregue em até 72h com frota própria"
        ├── fas fa-microchip   | "Tecnologia e Inovação"              | "Soluções e sistemas mais modernos..."
        └── fas fa-leaf        | "Sustentabilidade"                   | "Governança ambiental, social e corporativa"
        Estilo card: bg #FFFFFF, border #DDF2E4, border-radius 12px, pad 24px
        Ícone: bg #DDF2E4, cor #00B050
```

ManifestoSection:
```
Container [bg: #0B3C24, padding: 96px 0]
  custom_css: background-image: radial-gradient(circle, rgba(0,176,80,0.08) 1px, transparent 1px); background-size: 32px 32px;
└── Inner Container [max-width: 896px, column, align-center, gap: 64px]
    ├── heading      → "Nossa <span #00B050>missão</span>" (branco, 36px)
    ├── text-editor  → blockquote itálico branco ("Por um mundo mais saudável...")
    ├── text-editor  → "— Unistéril" (#DDF2E4, uppercase, small, tracking)
    ├── divider      → cor #FFFFFF33
    ├── Grid [3 col] → 3x icon-box (Segurança/Inovação/Excelência)
    │   Ícone: bg #00B05019, border #00B05050, cor #00B050
    │   Texto: branco/light-green
    ├── divider      → cor #FFFFFF33
    ├── text-editor  → "Nossas Certificações" (#DDF2E4, uppercase label)
    └── Inner Row [justify-center, gap: 16px]
        2x icon-box: fas fa-award | "RINA ISO 9001"/"ISO 9001:2015" | subtítulos
        Card: bg #FFFFFF0D, border #FFFFFF26, border-radius 16px
```

- [ ] Adicionar seções 5 e 6 ao `content` do page JSON
- [ ] Validar JSON parcial

---

### Task 5: Page JSON — Method + CTA Final + Fechar arquivo

**Seções incluídas:**

MethodSection:
```
Container [bg: #FFFFFF, padding: 80px 0]
└── Inner Container [boxed, column, gap: 48px]
    ├── heading      → "Nosso <span #00B050>método</span>"
    ├── text-editor  → "Veja como funcionam os processos da Unistéril"
    └── Inner Row [justify-evenly, align-start, position: relative]
        custom_css: ::before { content:''; position:absolute; top:28px; left:12.5%; right:12.5%; height:2px; background:#DDF2E4; z-index:0; }
        4x inner Column [align-center, z-index:1]:
        ├── icon-box → fas fa-box-open      | "01" | "Recepção"
        ├── icon-box → fas fa-clipboard-list| "02" | "Conferência Inicial"
        ├── icon-box → fas fa-hands-wash    | "03" | "Lavagem Manual"
        └── icon-box → fas fa-water         | "04" | "Lavagem Automatizada (ultrassônica)"
        Ícone: círculo bg #00B050, ícone branco 24px
        Número: #00B050, bold, 24px (no title do icon-box)
```

CtaFinalSection:
```
Container [id="contato", bg: #F4F8F5, padding: 80px 0, text-center]
└── Inner Container [max-width: 768px, column, align-center, gap: 24px]
    ├── heading      → "Fale aqui com um de nossos <span #00B050>especialistas</span>"
    ├── text-editor  → "Entre em contato e descubra como a Unistéril..."
    └── button       → "Clique aqui" (bg: #00B050, icon: fas fa-comment left)
```

- [ ] Adicionar seções 7 e 8, fechar o array `content`, adicionar `page_settings` e metadados
- [ ] Validar JSON completo do page

---

### Task 6: Footer JSON

**Files:**
- Create: `elementor-templates/unisteril-footer.json`

**Estrutura:**
```
Container [bg: #0B3C24, padding: 64px 0]
└── Grid [4 col desktop / 1 mobile, boxed, gap: 40px]
    ├── Col 1 [column, gap: 16px]
    │   ├── heading        → "Unistéril" (branco, bold 24px)
    │   ├── text-editor    → "Qualidade em Processamento e Esterilização" (#DDF2E4, 14px)
    │   └── social-icons   → Instagram / Facebook / LinkedIn (círculos brancos)
    ├── Col 2 [column]
    │   ├── heading        → "Links" (branco, semibold 14px)
    │   └── nav-menu       → Soluções/Diferenciais/Blog/Contato (#DDF2E4)
    ├── Col 3 [column, gap: 12px]
    │   ├── heading        → "Contato" (branco, semibold 14px)
    │   ├── icon-box       → fas fa-envelope | "contato@unisteril.com.br" (#DDF2E4)
    │   └── icon-box       → fas fa-phone    | "32 3263-1319" (#DDF2E4)
    └── Col 4 [column, gap: 16px]
        ├── heading        → "Newsletter" (branco, semibold 14px)
        ├── text-editor    → "Assine nossa newsletter..." (#DDF2E4, 14px)
        └── form widget    → campos: nome (text) + email + botão "Enviar"

Container [bg: #0B3C24, border-top: 1px solid #FFFFFF1A, padding: 16px 0]
└── Inner Row [boxed, space-between]
    ├── text-editor  → "© Unistéril – Todos os direitos reservados" (#DDF2E4, 12px)
    └── text-editor  → "Política de Privacidade" (#DDF2E4, 12px)
```

- [ ] Escrever `unisteril-footer.json` completo
- [ ] Validar JSON: `node -e "..."`

---

### Task 7: Validação Final

- [ ] Validar os 3 arquivos com Node.js
- [ ] Conferir IDs únicos (nenhum ID repetido dentro do mesmo arquivo)
- [ ] Confirmar que `"type"` está correto em cada arquivo (`"header"`, `"page"`, `"footer"`)
- [ ] Confirmar que `"version": "0.4"` está nos 3 arquivos
