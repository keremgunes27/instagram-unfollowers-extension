window.onload = function () {
   addButton();
};

const searchBtn = document.createElement("button")
function addButton(){
    searchBtn.innerText = "Takipçileri Tara";
    searchBtn.classList.add("searchBtn")

    setInterval(()=>{
        document.querySelector("header").appendChild(searchBtn);

    },1000)
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
};

var nameFollowers = [""]
var nameFollowing = [""]
var finnalyList = [""]

async function followersList(){
     ht=1;
     last_ht = 0;


    while (ht != last_ht){
        last_ht = ht;

        await sleep(1000);
        document.querySelector('._aano').scrollTo(0, document.querySelector('._aano').scrollHeight);
        ht = document.querySelector('._aano').scrollHeight;

        followersLinks = document.querySelectorAll('._aap6._aap7._aap8 a ');
    }
}
async function followingList(){
     ht=1;
     last_ht = 0;


    while (ht != last_ht){
        last_ht = ht;

        await sleep(1000);
        document.querySelector('._aano').scrollTo(0, document.querySelector('._aano').scrollHeight);
        ht = document.querySelector('._aano').scrollHeight;

        followingLinks = document.querySelectorAll('._aap6._aap7._aap8 a ');
    }
}

searchBtn.addEventListener('click', async ()=>{
    const folBtn = document.querySelectorAll('._aa_5 a');

    folBtn[0].click();
   await followersList();

   followersLinks.forEach(element => {
       nameFollowers.push(element.innerText)
   })

  document.querySelector('._ac76 button').click();

   await sleep(1000);

    folBtn[1].click();
    await sleep(1000);
    await followingList();

    followingLinks.forEach(element => {
        nameFollowing.push(element.innerText)
    })

    nameFollowing.forEach(element=>{
        if (nameFollowers.includes(element))return;
        finnalyList.push(element)
    })


    document.querySelector('._ac76 button').click();

    searchBtn.style.display = "none";

    await sleep(1000);

    const container = document.createElement("div");
    container.setAttribute("id", "myContainer");
    const title = document.createElement("h1");
    title.setAttribute("id", "myTitle");
    title.innerText = "Unfollowers"
    container.appendChild(title)

    const list = document.createElement('ul');
    list.setAttribute("id", "myUl");
    container.appendChild(list)

    document.querySelector('header').appendChild(container);

    await sleep(1000);

    finnalyList.forEach(element=>{
        const li = document.createElement("li");
        li.innerText = "@"+element;
        li.setAttribute('id', 'myLi');
        list.appendChild(li);
    })

})