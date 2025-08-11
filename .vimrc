" Configuração para formatação automática com Biome
autocmd BufWritePre *.ts,*.tsx,*.js,*.jsx,*.json :silent !biome format --write %
autocmd BufWritePost *.ts,*.tsx,*.js,*.jsx,*.json :edit!
