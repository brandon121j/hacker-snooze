fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then((rawData) => rawData.json())
    .then((data) => {
        for(i = 0; i < 100; i++) {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
                .then((next) => next.json())
                .then((nextData) => {
                    const newElement = $(`<a target="_blank" href=${nextData.url}><span>${nextData.score}</span> | <span id='hello'>${nextData.title}</span> | <span id='bye'>${nextData.descendants}</span> | ${nextData.by} </a>`)
                    $('.content').append(newElement)
                })
        }
    })

    for(let i = 0; i < 10; i++) {
    
    
    }

    // const newElement = $(`<a href=https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty>${data[i]}</a><br>`)
    // $('.content').append(newElement)