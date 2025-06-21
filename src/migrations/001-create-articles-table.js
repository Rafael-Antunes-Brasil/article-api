module.exports = async function runMigration(db) {

    await db.exec(`
        CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        resume TEXT NOT NULL,
        author TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        publishDate DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);

    const countResult = await db.get(`
        SELECT
            COUNT(*) as count
        FROM
            articles
        `);

    if (countResult.count === 0) {
        await db.run(`
            INSERT INTO
                articles (title, content, resume, author)
            VALUES
                ('Primeiro Artigo', 'Este é o conteúdo do primeiro artigo de exemplo.', 'Este é o resumo do primeiro artigo de exemplo', 'Autor A'),
                ('Segundo Artigo', 'Conteúdo do segundo artigo, um pouco mais detalhado.', 'Este é o resumo do segundo artigo de exemplo', 'Autor B'),
                ('Terceiro Artigo', 'Mais um artigo de exemplo para testar a funcionalidade.', 'Este é o resumo do terceiro artigo de exemplo', 'Autor C');
        `);
    } else {
        console.log('Tabela "articles" já contém dados. Pulando inserção de dados fictícios.');
    }
};
