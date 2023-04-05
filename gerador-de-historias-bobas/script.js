const form= document.querySelector('.form')
let inputNome= document.querySelector('.nome')

// John
const stories_pt=[
    {
        title:`O velho da aldeia`,
        paragraph:`
        Um velho chamado John que morava na aldeia. 
        Ele era uma das pessoas mais infelizes do mundo. 
        Toda a aldeia estava cansada dele; ele sempre foi sombrio, ele constantemente reclamava e estava sempre de mau humor.
        Quanto mais John vivia, mais resingão ele se estava a tornar e mais venenosas eram as suas palavras. 
        As pessoas o evitavam, porque o seu infortúnio se tornava contagioso. Era até antinatural e insultante ser feliz ao lado dele.
        Ele criou o sentimento de infelicidade nos outros.
        `
    },  
    {
        title:`O homem sábio`,
        paragraph:`
        As pessoas vêm ao homem sábio, reclamando dos mesmos problemas todas as vezes. 
        Um dia ele contou uma piada e todos caíram na gargalhada.
        Depois de alguns minutos, ele contou a mesma piada e apenas alguns deles sorriram.   
        Quando ele contou a mesma piada pela terceira vez, ninguém riu mais.   
        O sábio John sorriu e disse:  
        “Você não pode rir da mesma piada de novo e de novo. Então, por que você está sempre chorando sobre o mesmo problema? ”
        `
    },
    {
        title:`O burro esperto`,
        paragraph:`
        Um vendedor de sal chamado John costumava levar o saco de sal em seu jumento para o mercado todos os dias.
        No caminho eles tiveram que atravessar um riacho. Um dia, o burro de repente caiu no riacho e o saco de sal também caiu na água. 
        O sal dissolveu-se na água e, portanto, o saco ficou muito leve e fácil para transportar. 
        O burro estava feliz.
        Então o burro começou a usar o mesmo truque todos os dias.
        Até que John de sal começou a entender o truque e decidiu ensinar-lhe uma lição. `
    },
    {
        title:`Os dois melhores amigos`,
        paragraph:`
        Uma história conta que dois amigos estavam andando pelo deserto. Durante algum momento da jornada eles tiveram uma discussão, e um amigo deu um tapa na cara do outro
        Aquele que foi esbofeteado ficou ferido, mas sem dizer nada escreveu na areia;
        “Hoje John, o meu melhor amigo que me deu um tapa na cara.”
        Continuaram andando até encontrar um oásis, onde decidiram tomar um banho. Aquele que havia sido esbofeteado ficou preso na lama e começou a se afogar, 
        mas o amigo o salvou. Depois que ele se recuperou do quase afogamento, ele escreveu em uma pedra;
        `
    },
    {
        title:`Dois amigos e o urso`,
        paragraph:`
        Luís e John eram amigos. Em um feriado eles foram andando em uma floresta, apreciando a beleza da natureza. 
        De repente, eles viram um urso vindona direção deles. Eles ficaram assustados.
        Luís, que sabia tudo sobre escalar árvores, correu até uma árvore e subiu rapidamente. Ele não pensou em John. 
        John não tinha ideia de como escalar a árvore.
        John pensou por um segundo. Ele tinha ouvido que animais não gostam muito de cadáveres, então ele caiu no chão e prendeu a respiração. 
        O urso cheirou-o e achou que estava morto. Então, seguiu o seu caminho.    
        Luís perguntou a John; 
        “O que o urso sussurrou em seu ouvido?”
        John respondeu: “O urso me pediu para ficar longe de amigos como você”… e seguiu seu caminho.
        `
    },
]

const stories_us=[
    {
        title:`The old man of the village`,
        paragraph:`
        An old man named John who lived in the village.
        He was one of the unhappiest people in the world.
        The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood.
        The longer John lived, the more resentful he was becoming and the more venomous his words became.
        People avoided him because his misfortune became contagious. It was even unnatural and insulting to be happy next to him.
        He created the feeling of unhappiness in others.
        `
    },
    {
        title: `The Wise Man`,
        paragraph:`
        People come to the wise man, complaining about the same problems every time.
        One day he told a joke and everyone burst out laughing.
        After a few minutes he told the same joke and only a few of them smiled.
        When he told the same joke a third time, no one laughed anymore.
        Wise John smiled and said:
        “You can't laugh at the same joke over and over again. So why are you always crying about the same problem? ”
        `
    },
    {
        title: `The smart donkey`,
        paragraph: `
        A salt seller named John used to carry the bag of salt on his donkey to market every day.
        On the way they had to cross a stream. One day, the donkey suddenly fell into the stream and the bag of salt also fell into the water.
        The salt dissolved in the water, so the bag was very light and easy to carry.
        The donkey was happy.
        So the donkey started to use the same trick every day.
        Until Salt John began to understand the trick and decided to teach him a lesson. `
    },
    {
        title: `The two best friends`,
        paragraph:`
        One story tells that two friends were walking through the desert. During some point on the journey they had an argument, and one friend slapped the other in the face.
        The one who was slapped was hurt, but without saying anything he wrote in the sand;
        “Today John, my best friend who slapped me in the face.”
        They continued walking until they found an oasis, where they decided to take a bath. The one who had been slapped got stuck in the mud and started to drown,
        but the friend saved him. After he recovered from near-drowning, he wrote on a stone;
        `
    },
    {
        title: `Two friends and the bear`,
        paragraph:`
        Louis and John were friends. On a holiday they went walking in a forest, enjoying the beauty of nature.
        Suddenly, they saw a bear coming towards them. They were scared.
        Luis, who knew all about tree climbing, ran to a tree and quickly climbed. He didn't think about John.
        John had no idea how to climb the tree.
        John thought for a second. He had heard that animals don't like dead bodies very much, so he dropped to the ground and held his breath.
        The bear smelled him and thought he was dead. So he went on his way.
        Louis asked John;
        “What did the bear whisper in your ear?”
        John replied, “The bear asked me to stay away from friends like you”… and went on his way.
        `
    },
]


form.addEventListener('submit', (event)=>{ 
    event.preventDefault()
 
    let res= document.querySelector('.resultado')
    let idioma= document.querySelector('input[type="radio"]:checked')
    let nome = inputNome.value == "" || inputNome.value === undefined? 'John': inputNome.value

    function content(data){
        let numeroAleatorio= Math.floor(Math.random() * (data.length - 1))

        data.filter((_, ind)=>{
            return ind === numeroAleatorio

        }).map((el)=>{
             
            return (
                
                res.innerHTML= `
                <h3>${el.title}</h3>
                <p>${el.paragraph.replaceAll('John', `<strong>${nome}</strong>`)}</p>
                `
            )
        })
    }
    content(idioma.dataset.language  === 'us'?stories_us: stories_pt)
})
