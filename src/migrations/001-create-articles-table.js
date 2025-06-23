module.exports = async function runMigration(db) {

    await db.exec(`DROP TABLE IF EXISTS articles`);

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
                ('Chevrolet Chevette', 'O motor que empurrava o Chevette era um 1.4, com potência de 68cv brutos, câmbio de quatro marchas e tração traseira, que assegurava um ótimo diâmetro de giro. Freios dianteiros a disco eram um opcional. As dimensões do compacto eram 4,12 metros de comprimento, 1,57m de largura, 1,32m de altura e 2,39m de entre-eixos.', 'Um carro compacto que fez sucesso nas ruas brasileiras.', 'João Giovanni'),
                ('Honda CG 125', 'Considerada um “tanque de guerra” por conta da robustez e por topar qualquer tipo de trabalho, a Honda CG 125 é uma moto conhecida por todos os mecânicos e com oferta abundante de peças. Outra vantagem da motocicleta é a versatilidade, pois pode rodar tanto na cidade quanto nas estradas vicinais de diferentes pisos.', 'A moto mais vendida no Brasil, e que se tornou um ícone da indústria nacional.', 'Patrícia Rayssa'),
                ('Chevrolet Opala', 'É considerado um veículo robusto e confortável, com um bom espaço aos ocupantes. Nunca sofreu grandes mudanças, mantendo a mesma linha de cintura (desenho lateral) e motorização. Foi eleito pela Revista Autoesporte o Carro do Ano de 1972, prêmio vencido também pela Caravan, versão station wagon do Opala, em 1976.', 'Conhecido pelo seu design elegante e desempenho, foi um dos carros mais populares no Brasil.', 'Gabrielly Carolina'),
                ('Volkswagen Fusca', 'O Volkswagen Fusca, também conhecido como Carocha em Portugal, é um carro icônico e popular, notável por sua robustez, design arredondado e motor traseiro boxer. Foi o primeiro modelo da Volkswagen e se tornou um dos carros mais vendidos da história. Sua produção ocorreu entre 1938 e 2003, com grande sucesso no Brasil e em diversos outros países.', 'O carro do povo, símbolo de simplicidade e durabilidade.', 'Alexandre Pedro'),
                ('Volkswagen Kombi', 'A Volkswagen Kombi, também conhecida como "pão de forma", é um veículo comercial ligeiro produzido pela Volkswagen, famoso por seu design retangular e versatilidade. Foi lançada em 1950 e se tornou um ícone, sendo utilizada para transporte de carga e passageiros, além de ter um forte apelo cultural e nostálgico.', 'Um veículo versátil que serviu para diversas finalidades, desde transporte familiar até uso comercial.', 'Tiago Roberto'),
                ('Ford Maverick', 'O Ford Maverick é uma picape média da Ford que combina características de um utilitário robusto com a praticidade de um veículo urbano. Nos EUA, é conhecida por ser a picape mais barata da marca, com uma versão híbrida eficiente e boa capacidade de reboque. No Brasil, a Maverick é oferecida com motor 2.0 EcoBoost e também em uma versão híbrida, destacando-se pela tecnologia e conectividade.', 'Um muscle car brasileiro que se destacou por sua potência e design esportivo.', 'José Enzo'),
                ('Fiat 147', 'O Fiat 147 foi o primeiro carro produzido pela Fiat no Brasil, lançado em 1976. Baseado no Fiat 127 italiano, destacou-se por ser o primeiro carro produzido em larga escala a utilizar álcool como combustível, ganhando o apelido de "Cachacinha". Foi também o primeiro carro com motor transversal dianteiro e desembaçador traseiro no Brasil, além de oferecer diversas versões como hatch, sedã, perua, furgão e picape.', 'O primeiro carro da Fiat produzido no Brasil, com um design inovador.', 'Raimunda Bianca'),
                ('Honda CBX 750 (7 Galo)', 'A CBX 750F (também chamada de 7 Galo) é uma motocicleta esportiva, fabricada pela Honda e comercializada no Brasil entre 1986 e 1994. Esta motocicleta recebeu diversos codinomes ao longo de sua vida de fabricação, muitos dos quais originários de suas cores disponíveis.', 'Uma moto esportiva de alta cilindrada, admirada pelo seu design e desempenho.', 'Lavínia Aparecida'),
                ('Yamaha RD 350 LC', 'A Yamaha RD 350 LC foi uma motocicleta esportiva de dois tempos, produzida pela Yamaha entre 1980 e 1983. Ela se destacou por seu motor refrigerado a líquido, oferecendo 47 cv e 347cc. Conhecida pelo apelido "Elsie" na Europa, foi uma moto que marcou época pela sua esportividade e desempenho.', 'Uma moto esportiva de dois tempos, famosa por sua potência e desempenho.', 'Fabiana Sophia'),
                ('Gurgel BR-800', 'O Gurgel BR-800 foi um carro urbano brasileiro fabricado pela Gurgel entre 1988 e 1992. Projetado como um carro compacto e econômico para uso urbano, utilizava um motor bicilíndrico e carroceria de fibra de vidro. Tornou-se conhecido como o primeiro carro totalmente nacional, e apesar de suas limitações, foi elogiado por sua economia e praticidade.', 'Um carro nacional criado e fabricado no Brasil por uma empresa totalmente brasileira.', 'Sara Jaqueline'),
                ('Honda CB 500', 'A Honda CB 500 antiga, produzida entre 1997 e 2004, é conhecida pelo seu motor bicilíndrico de 498,8 cc, refrigeração líquida, que gera 54 cv e 4,5 kgfm de torque. Era equipada com dois carburadores e suspensão traseira com duplo amortecedor, além de um chassi de berço duplo em aço. A moto se destacava pelo desempenho, com velocidade máxima acima de 170 km/h, e pela confiabilidade.', 'Uma moto de estrada com bom desempenho e estilo.', 'Andrea Milena'),
                ('Yamaha DT 180', 'A Yamaha DT 180 é uma motocicleta trail, fabricada pela Yamaha, conhecida por sua robustez e popularidade no segmento de motos para uso misto (on-road e off-road) no Brasil. Lançada nos anos 80, a DT 180 destacou-se por sua suspensão traseira monoshock e capacidade de enfrentar diversos tipos de terreno, tornando-se uma referência no mercado nacional.', 'Uma moto de uso misto (on/off road), muito popular para trilhas e uso diário.', 'Jaqueline Isabela'),
                ('Honda CB 400', 'Motor bicilíndrico, comando no cabeçote, três válvulas por cilindro, 40 cv de potência e 170 km/h de velocidade máxima. O design moderno, muito moderno, onde se destacavam as inovadoras rodas Comstar, miolo de aço estampado, aro de alumínio. Lindas!', 'Uma moto de estrada clássica, conhecida por seu motor potente e estilo.', 'Milena Maria'),
                ('Honda XL 250R', 'Especificações Técnicas: - Motor: Monocilindrico de quatro tempos, refrigerado a ar - Cilindrada: 248 cm³ - Potência: 22 CV a 7.500 rpm - Torque: 2,kgfm a 7.000 rpm - Transmissão: Seis marchas - Capacidade do tanque de combustível: 12L com reserva de 3L - Freios: Sistema de tambor de acionamento mecânico.', 'Outra moto de uso misto, muito popular entre os aventureiros.', 'Débora Letícia'),
                ('Yamaha Ténéré XT600Z', 'A primeira XT 600Z Ténéré (nome da região Sul do Sahara) tem sua origem nas motos do Dakar. O modelo foi lançado no Brasil em 1988, acompanhando as mudanças da segunda geração europeia. No começo de 1990 uma nova atualização chegou ao país, com a carenagem frontal fixa e dois faróis redondos. Nesta época ela rivalizava com a Honda NX 350 Sahara e Agrale Elefantré 30.5. Mais tarde a Ténéré foi substituída pela XT 600, que logo deu origem a XT 660.', 'Uma moto trail de grande porte, ideal para viagens e aventuras.', 'Vitória Rebeca'),
                ('Honda Turuna 125', 'Com 124 cm³ de cilindrada, a Turuna entregava 3 cavalos a mais que sua “genitora”. Os 14 cv gerados a 10.000 rpm faziam jus ao nome, que sugeria agilidade, força e versatilidade. O torque também se destacava: 1,0 kgfm a 9.000 rpm, contra os 0,94 kgfm a 7.500 rpm da CG.', 'Uma moto pequena e econômica, perfeita para o uso urbano.', 'Kauê Heitor'),
                ('Willys Interlagos', 'O Willys Interlagos foi o primeiro carro esportivo brasileiro, produzido pela Willys-Overland de 1962 a 1966, inspirado no Renault Alpine A108. O nome homenageava o Autódromo de Interlagos e visava destacar a esportividade do modelo, que teve 822 unidades fabricadas.', 'Um carro esportivo que foi produzido no Brasil pela Willys Overland.', 'Levi Giovanni'),
                ('Yamaha YBR 125', 'Capaz de gerar potência máxima de 12,5 cv a 7.500 rpm e torque máximo de 1,19 kgf.m a 6.500 rpm, é o motor ideal para quem quer uma moto para o transporte ou como ferramenta de trabalho. Principalmente pela economia de combustível — seu consumo fica acima de 30 km/l.', 'Uma moto popular pela sua economia e facilidade de pilotagem.', 'Sophie Aline')
        `);
        console.log('dados inseridos')
    } else {
        console.log('Tabela "articles" já contém dados. Pulando inserção de dados fictícios.');
    }
};
