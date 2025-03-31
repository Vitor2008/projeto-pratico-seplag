# Projeto Prárico Seplag
Projeto prático para o processo seletivo da Seplag. 

# Descrição do Projeto
O projeto é uma SPA (Single Page Application) desenvolvida para exibir informações sobre pessoas desaparecidas, consumindo a API pública da Polícia Judiciária Civil de Mato Grosso. O sistema permite visualizar detalhes dos desaparecidos e enviar novas informações sobre os casos.

## Padrão de Arquitetura
- Componentização: Os componentes são organizados dentro da pasta components, tornando a estrutura modular e reutilizável.

## Design Patner
- Modularização: O código é organizado em módulos reutilizáveis, separando UI, lógica de negócio e chamadas à API.
- Factory Pattern (parcialmente): O serviço de API (api.tsx) encapsula chamadas HTTP, permitindo reutilização e fácil manutenção.
- Observer Pattern (React Hooks - useEffect, useState):  A aplicação reage a mudanças de estado para atualizar a UI dinamicamente.
- Lazy Loading (React Suspense & Lazy - previsto): Para otimizar o carregamento, os componentes podem ser carregados sob demanda.

# :compression: Estrutura
A divisão das responsabilidades estão separadas por pastas.

#### Components
- Os componentes com as páginas web.

#### Routes
- Gerenciamento de rotas da aplicação.

#### Services
- Comunicação com a API externa.

#### Styles
- Estilos globais da aplicação.

#### Helpers
- Destinados a métodos auxiliares.


# :hammer_and_wrench: Tecnologias

- [<img align="center" alt="ASP.NET" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg"> ASP.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet/3.1)
- [<img align="center" alt="React" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg"> React])

# :hammer_and_pick: Ferramentas

- [<img align="center" alt="VisualStudio" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudiocod-plain.svg"> Visual Studio Code](https://code.visualstudio.com/)


# :star: Contribuidores
<table>
<tr>
<td align="center">
<a href="http://gitlab.ci.redeflex.com.br/vitor.almeida"><img style="border-radius: 50%;" src="http://gitlab.ci.redeflex.com.br/uploads/-/system/user/avatar/7/avatar.png?width=400" width="100px;" alt=""/><br /><b>Vitor Almeida</b></a>
</td>
</tr>
</table>
