# 🛒 Econverse - Teste Desenvolvedor Front-End

Este repositório contém o desafio técnico para a vaga de Desenvolvedor Front-End na **Econverse**. O projeto foca na criação de uma interface de e-commerce de alta fidelidade visual, com consumo de dados dinâmicos e arquitetura moderna.

---

## 🔗 Referências do Desafio

O projeto foi desenvolvido seguindo rigorosamente as especificações oficiais:

- **Layout (Figma):** [Design Teste-Front-End-Jr](https://www.figma.com/design/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0-1&p=f&t=Rt9jEQcgJ2PbprIV-0)
- **API/JSON:** [Lista de Produtos Econverse](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)

---

## 🛠️ Tecnologias Utilizadas

Para garantir um código limpo, tipado e de fácil manutenção, foram utilizadas as seguintes tecnologias:

- **React 18**: Construção de interface reativa e componentizada.
- **TypeScript**: Garantia de tipagem estática e segurança no fluxo de dados.
- **Vite**: Tooling para um ambiente de desenvolvimento rápido e otimizado.
- **SASS (SCSS Modules)**: Estilização modular, evitando vazamento de escopo global.
- **Fetch API & Custom Hooks**: Abstração da lógica de consumo de dados.

---

## 📐 Diferenciais e Boas Práticas

- **Pixel Perfect**: Fidelidade total ao layout do Figma, respeitando cores, fontes e espaçamentos.
- **Clean Architecture**: Organização modular de pastas (hooks, services, components e types).
- **SEO & HTML Semântico**: Estruturação pensada em acessibilidade e indexação.
- **Zero UI Libs**: Toda a estilização e componentes foram desenvolvidos do zero, sem o uso de frameworks externos.

---

## 📦 Como rodar o projeto

Para compilar e rodar o projeto em sua máquina local, siga os passos:

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/efernandalima/teste-front-end.git
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Executar em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Gerar build de produção (para compilar):**
   ```bash
   npm run build
   ```

---

## 📂 Estrutura de Pastas

```text
src/
├── assets/         # Ícones (SVG) e imagens
├── components/     # Componentes modulares (tsx + scss modules)
├── hooks/          # Hooks customizados
├── services/       # Camada de comunicação com a API
├── styles/         # Variáveis e estilos globais
└── types/          # Interfaces TypeScript
```

---

## 📝 Implementações Realizadas

- **Vitrine de Produtos**: Consumo dinâmico dos dados através do endpoint fornecido.
- **Modal de Detalhes**: Interatividade ao clicar em um produto, exibindo as informações detalhadas.
- **Responsividade**: Layout adaptável para mobile, tablet e desktop.

---

**Desenvolvido por Fernanda Lima** 🚀
