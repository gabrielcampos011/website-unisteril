# Design: Conversão Unistéril → Modelos JSON Elementor

**Data:** 2026-06-30  
**Status:** Aprovado

---

## Objetivo

Converter todas as seções do site Unistéril (Next.js) em modelos JSON compatíveis com o Elementor (WordPress), prontos para importação via *Templates > Importar*.

---

## Saída

Três arquivos JSON na pasta `elementor-templates/`:

| Arquivo | Tipo Elementor | Conteúdo |
|---------|----------------|----------|
| `unisteril-header.json` | `"header"` | Barra de navegação sticky |
| `unisteril-page.json` | `"page"` | As 8 seções de conteúdo |
| `unisteril-footer.json` | `"footer"` | Rodapé com 4 colunas |

**Padrão:** Elementor nativo puro — sem campos `ha_*` ou outros plugins.  
**Versão:** `"0.4"` (atual).  
**Imagens:** campos `image.url` deixados vazios (`""`); preenchidos manualmente após import.

---

## Paleta de Cores

| Variável | Hex |
|----------|-----|
| dark-green | `#0B3C24` |
| brand-green | `#00B050` |
| light-green | `#DDF2E4` |
| bg-light | `#F4F8F5` |
| text-dark | `#1A1A1A` |
| text-muted | `#555555` |
| white | `#FFFFFF` |

---

## Estrutura JSON Base (por elemento)

```json
{
  "id": "<8-char hex>",
  "elType": "container | widget",
  "isInner": false,
  "settings": { ... },
  "elements": [ ... ],
  "widgetType": "<type>"   // apenas para elType: "widget"
}
```

Breakpoints responsivos: sufixos `_tablet` e `_mobile` nas keys de settings.

---

## Mapeamento Seção por Seção

### 1. Header (`unisteril-header.json`)

```
Container [sticky, full-width, bg: #FFFFFF, border-bottom, z-index: 999]
└── Inner Container [row, max-width: boxed, space-between, align-center]
    ├── Heading widget        → "Unistéril" (logo text, #0B3C24, bold 20px)
    ├── nav-menu widget       → Links: Soluções / Diferenciais / Blog / Contato
    └── button widget         → "Área do Cliente" (bg: #00B050, rounded)
```

Responsivo: nav-menu e button ocultados no mobile via `hide_mobile`.

---

### 2. HeroSection

```
Container [min-height: 100vh, bg: #0B3C24, flex-center, text-center]
└── Inner Container [max-width: 900px, column, gap: 24px]
    ├── text-editor widget    → "Qualidade em" (color: #DDF2E4, 18px)
    ├── heading widget (h1)   → "processamento e esterilização"
    │                           ("processamento e" branco, "esterilização" #00B050)
    │                           (font-size: 64px desktop / 40px mobile)
    └── button widget         → "Saiba mais" (bg: #FFFFFF, color: #0B3C24)
```

Animação: `_animation: "fadeInUp"` com delays escalonados (0ms, 200ms, 400ms).

---

### 3. MetricsSection

```
Container [bg: #F4F8F5, padding: 80px 0]
└── Inner Container [max-width: boxed, column, gap: 48px]
    ├── heading widget        → eyebrow "A Unistéril" + destaque "em números"
    ├── Grid Container [4 colunas desktop / 2 colunas mobile]
    │   ├── counter widget    → prefix "+", ending: 30, label: "anos de tradição"
    │   ├── counter widget    → prefix "+", ending: 20, label: "clínicas e hospitais atendidos"
    │   ├── counter widget    → prefix "+", ending: 85, label: "cidades atendidas"
    │   └── counter widget    → prefix "+", ending: 15, suffix: "mil",
    │                           label: "itens processados apenas em 2025"
    └── button widget         → "Saiba mais" (bg: #00B050)
```

Cor dos números: `#00B050`. Animação: `duration: 2000`.

---

### 4. SolutionsSection

```
Container [id="soluções", bg: #FFFFFF, padding: 80px 0]
├── heading (eyebrow "Nossas" + destaque "soluções")
├── text-editor              → subtítulo
└── Grid Container [4 colunas / 2 mobile, sem gap, min-height: 480px]
    ├── Container [bg gradient #0B3C24→#0d4a2c, hover: scale 1.05 via custom_css]
    │   ├── icon widget      → fas fa-flask (#00B050, top-left)
    │   ├── heading widget   → "Processamento" (branco, bold)
    │   └── button widget    → "Saiba mais" (outline, #DDF2E4, com seta →)
    ├── Container [bg gradient #0d4a2c→#0B3C24]
    │   └── (mesma estrutura) → "Esterilização por Óxido de Etileno" / fas fa-wind
    ├── Container [bg gradient #0B3C24→#0a3320]
    │   └── (mesma estrutura) → "Esterilização a Vapor" / fas fa-thermometer-half
    └── Container [bg gradient #0a3320→#0B3C24]
        └── (mesma estrutura) → "Esterilização Industrial (OXIETO)" / fas fa-industry
```

Hover scale via `custom_css` no container.

---

### 5. CtaInterruptSection

```
Container [bg: #0B3C24, padding: 80px 0, text-center]
└── Inner Container [max-width: 768px, column, align-center, gap: 24px]
    ├── heading widget        → "Fale aqui com um de nossos especialistas"
    │                           ("especialistas" em #00B050)
    └── button widget         → "Clique aqui" (ícone: fas fa-phone, bg: #FFFFFF,
                                color: #0B3C24, rounded-full)
```

---

### 6. DifferentialsSection

```
Container [id="diferenciais", bg: #F4F8F5, padding: 80px 0]
└── Inner Container [max-width: boxed, column]
    ├── heading widget        → "Nossos diferenciais"
    └── Grid Container [3 colunas desktop / 1 mobile, gap: 24px]
        ├── icon-box widget   → fas fa-shield-alt | "Segurança no processamento"
        │                       | "Rigorosos padrões de qualidade"
        ├── icon-box widget   → fas fa-award | "Programa de Excelência Operacional"
        │                       | "Boas práticas internacionais de processamento"
        ├── icon-box widget   → fas fa-barcode | "Sistema de Rastreabilidade"
        │                       | "Controle online dos seus materiais"
        ├── icon-box widget   → fas fa-truck | "Logística Eficiente"
        │                       | "Entregue em até 72h com frota própria"
        ├── icon-box widget   → fas fa-microchip | "Tecnologia e Inovação"
        │                       | "Soluções e sistemas mais modernos do mercado"
        └── icon-box widget   → fas fa-leaf | "Sustentabilidade"
                                | "Governança ambiental, social e corporativa"
```

Cards: bg branco, border `#DDF2E4`, border-radius 12px, padding 24px.  
Ícone: fundo `#DDF2E4`, cor `#00B050`.  
**Nota:** Grid fixo 3×2 substitui o carousel do Next.js (Elementor nativo sem carousel de cards).

---

### 7. ManifestoSection

```
Container [bg: #0B3C24, padding: 96px 0, custom_css: dot-pattern radial-gradient]
└── Inner Container [max-width: 896px, column, align-center, gap: 64px]
    ├── heading widget        → "Nossa missão" ("missão" em #00B050)
    ├── text-editor widget    → blockquote em itálico, texto branco
    ├── text-editor widget    → "— Unistéril" (light-green, uppercase, tracking)
    ├── divider widget        → cor branca/transparente
    ├── Grid Container [3 colunas, text-center]
    │   ├── icon-box widget   → fas fa-shield-alt | "Segurança" | "Rigorosos padrões..."
    │   ├── icon-box widget   → fas fa-lightbulb  | "Inovação"  | "Tecnologia de ponta..."
    │   └── icon-box widget   → fas fa-star       | "Excelência"| "Boas práticas..."
    ├── divider widget
    ├── text-editor widget    → "Nossas Certificações" (label uppercase, light-green)
    └── Inner Container [row, justify-center, gap: 16px]
        ├── icon-box widget   → fas fa-award | "RINA ISO 9001" | "Gestão da Qualidade"
        └── icon-box widget   → fas fa-award | "ISO 9001:2015" | "Empresa Certificada"
```

Ícones dos pilares: fundo `#00B050/10`, borda `#00B050/30`, cor `#00B050`.  
Certificações: card com bg `#FFFFFF0D`, borda `#FFFFFF26`, border-radius 16px.

---

### 8. MethodSection

```
Container [bg: #FFFFFF, padding: 80px 0]
└── Inner Container [max-width: boxed, column, gap: 48px]
    ├── heading widget        → "Nosso método"
    ├── text-editor widget    → subtítulo
    └── Inner Container [row, 4 colunas, justify-evenly]
        ├── icon-box widget   → fas fa-box-open        | "01" | "Recepção"
        ├── icon-box widget   → fas fa-clipboard-list  | "02" | "Conferência Inicial"
        ├── icon-box widget   → fas fa-hands-wash      | "03" | "Lavagem Manual"
        └── icon-box widget   → fas fa-wave-square     | "04" | "Lavagem Automatizada (ultrassônica)"
```

Círculo do ícone: bg `#00B050`, ícone branco.  
Número: texto `#00B050`, bold, 24px.  
Linha horizontal entre etapas: `custom_css ::before` no container pai.

---

### 9. CtaFinalSection

```
Container [id="contato", bg: #F4F8F5, padding: 80px 0, text-center]
└── Inner Container [max-width: 768px, column, align-center, gap: 24px]
    ├── heading widget        → "Fale aqui com um de nossos especialistas"
    │                           ("especialistas" em #00B050)
    ├── text-editor widget    → "Entre em contato e descubra como a Unistéril..."
    └── button widget         → "Clique aqui" (ícone: fas fa-comment, bg: #00B050)
```

---

### 10. Footer (`unisteril-footer.json`)

```
Container [bg: #0B3C24, padding: 64px 0]
└── Grid Container [4 colunas desktop / 1 mobile, max-width: boxed]
    ├── Col 1 [column, gap: 16px]
    │   ├── heading widget    → "Unistéril" (bold 24px, branco)
    │   ├── text-editor       → "Qualidade em Processamento e Esterilização" (light-green)
    │   └── social-icons      → Instagram / Facebook / LinkedIn (círculos brancos)
    ├── Col 2 [column]
    │   ├── heading widget    → "Links" (branco, semibold)
    │   └── nav-menu widget   → Soluções / Diferenciais / Blog / Contato (light-green)
    ├── Col 3 [column]
    │   ├── heading widget    → "Contato" (branco, semibold)
    │   ├── icon-box widget   → fas fa-envelope | "contato@unisteril.com.br"
    │   └── icon-box widget   → fas fa-phone    | "32 3263-1319"
    └── Col 4 [column]
        ├── heading widget    → "Newsletter" (branco, semibold)
        ├── text-editor       → "Assine nossa newsletter..."
        └── form widget       → campos: Nome + Email + botão "Enviar"

Container [bg: #0B3C24, border-top: #FFFFFF1A, padding: 16px 0]
└── Inner Container [row, space-between]
    ├── text-editor          → "© Unistéril – Todos os direitos reservados"
    └── text-editor          → "Política de Privacidade"
```

---

## Compromissos Técnicos

| Feature | Solução Elementor |
|---------|-------------------|
| Carousel de Diferenciais | Grid 3×2 (nativo) |
| Blur blobs do Hero | Omitidos (puramente decorativos) |
| Dot pattern do Manifesto | `custom_css: background-image: radial-gradient(...)` |
| Linha da timeline | `custom_css: ::before` no container |
| FadeIn scroll | `_animation: "fadeInUp"` + `_animation_delay` nativo |
| Counter animado | Widget `counter` nativo Elementor |

---

## Convenções de ID

IDs gerados como strings hex de 8 caracteres (ex: `"a1b2c3d4"`), únicos por arquivo. Seguem o padrão dos modelos de exemplo fornecidos.

---

## Checklist de Entrega

- [ ] `elementor-templates/unisteril-header.json`
- [ ] `elementor-templates/unisteril-page.json`
- [ ] `elementor-templates/unisteril-footer.json`
