# Setup

[![Azure Static Web Apps CI/CD](https://github.com/AIKidsKit/web/actions/workflows/azure-static-web-apps-polite-wave-072dd570f.yml/badge.svg)](https://github.com/AIKidsKit/web/actions/workflows/azure-static-web-apps-polite-wave-072dd570f.yml)


| What | How |
|:---|:---|
| **SCAFFOLD SITE** | |
| Create GitHub Repo and clone to local sandbox | GitHub  |
| Create Docusaurus project in `docs` in repo | `npx create-docusaurus@latest docs classic` |
| Run development server (hot reload) | `cd docs; npm run start` |
|**CONFIGURE FOR AZURE STATIC WEB APPS** | |
| Open VSCode in root of GitHub project folder | Helps it pick up default settings later |
| Install SWA VS Code Extension | Install from [Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps) and follow guide (steps below) |
| Click Azure symbol in sidebar | Login if not already authenticated, select subscription for use |
| Select Static Web Apps Feature | Click `+` to add new static web app config |
| Authorize VS Code for GitHub | Will authenticate - and automate commits required for setup |
| Answer questions related to project config | location=docs, build-artifact=build |
| Select front-end framework settings | Selecting "React" worked |
| Confirm | Creates github actions workflow and commits it! |
| Check GitHub Actions tab on Repo  | Track that it built successfully |
| Visit [Azure Portal](https://portal.azure.com) look for created resource | You should be able to find deployed website URL |
| | |
