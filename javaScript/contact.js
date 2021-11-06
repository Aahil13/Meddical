// for the news section

let news = [
    {
        img:"",
        date:"Monday 05, September 2021 | By Author",
        text:"This Article's Title goes Here, but not too long.",
        eye:"",
        love:"https://i.postimg.cc/XJ510rXs/Vector12.png",
    },
    {
        img:"",
        date:"Monday 05, September 2021 | By Author",
        text:"This Article's Title goes Here, but not too long.",
        eye:"",
        love:"https://i.postimg.cc/XJ510rXs/Vector12.png",
        display:"vanish"
    },
    {
        img:"",
        date:"Monday 05, September 2021 | By Author",
        text:"This Article's Title goes Here, but not too long.",
        eye:"",
        love:"https://i.postimg.cc/XJ510rXs/Vector12.png",
    },
    {
        img:"",
        date:"Monday 05, September 2021 | By Author",
        text:"This Article's Title goes Here, but not too long.",
        eye:"",
        love:"https://i.postimg.cc/XJ510rXs/Vector12.png",
    },
]

// for the news carousel

let infoGrid = document.getElementById("news-grid");
let html1 ="";
news.forEach( e=> {
    html1 += `
        <div class="col-md-6 mb-3 d-flex justify-content-center">
            <button type="button" class="btn py-0 btn-lg d-flex align-items-center border border-light">
                <img src="images/Rectangle 34.png" style="height:120px"><span class="badge">
                    <div class="contain text-left">
                        <small class="light-color">Monday 05, September 2021 | By Author</small>
                        <p class="mt-2">This Article's Title goes Here,<br> but not too long.</p>
                        <p><img src="images/icons/Group 198.png" alt="eye"> 68 <img src="${e.love}" alt="love"> 86 </p>
                    </div>
                </span>
            </button>
        </div>
    `
    infoGrid.innerHTML = html1;
})

let infoGrid1 = document.getElementById("news-grid1");
let html2 ="";
news.forEach( e=> {
    html2 += `
        <div class="col-md-6 mb-3 d-flex justify-content-center">
            <button type="button" class="btn py-0 btn-lg d-flex align-items-center border border-light">
                <img src="images/Rectangle 34.png" style="height:120px"><span class="badge">
                    <div class="contain text-left">
                        <small class="light-color">Monday 05, September 2021 | By Author</small>
                        <p class="mt-2">This Article's Title goes Here,<br> but not too long.</p>
                        <p><img src="images/icons/Group 198.png" alt="eye"> 68 <img src="${e.love}" alt="eye"> 86 </p>
                    </div>
                </span>
            </button>
        </div>
    `
    infoGrid1.innerHTML = html2;
})

let infoGrid2 = document.getElementById("news-grid2");
let html3 ="";
news.forEach( e=> {
    html3 += `
        <div class="col-md-6 mb-3 d-flex justify-content-center">
            <button type="button" class="btn py-0 btn-lg d-flex align-items-center border border-light">
                <img src="images/Rectangle 34.png" style="height:120px"><span class="badge">
                    <div class="contain text-left">
                        <small class="light-color">Monday 05, September 2021 | By Author</small>
                        <p class="mt-2">This Article's Title goes Here,<br> but not too long.</p>
                        <p><img src="images/icons/Group 198.png" alt="eye"> 68 <img src="${e.love}" alt="eye"> 86 </p>
                    </div>
                </span>
            </button>
        </div>
    `
    infoGrid2.innerHTML = html3;
})