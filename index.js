let size=document.querySelector("#size").value;
let speed=document.querySelector("#speed").value;
let bar=document.querySelector("#bar");
let arr=[];
let bars=document.querySelectorAll(".special");
let butts;
let sizeButton=document.querySelector("#size");
let speedButton=document.querySelector("#speed");
let modeButton=document.querySelector("#method");


function init()
{
	bar.innerHTML="";
	size=document.querySelector("#size").value;
	arr=[];
	for(let i=0;i<size;i++)
	{
		let temp=Math.floor(Math.random()*100);
		arr.push(temp);


		let tbar = document.createElement("DIV");
		let margin_size=0.1;
		tbar.classList.add("special");
		tbar.style="margin:0%" + margin_size + "%; width:" + (100/size-(2*margin_size)) + "%;";
		let height = (temp*5+10).toString();
		height = height+'px';
		tbar.style.height=height;
		addcol(tbar,"yellow");

		bar.appendChild(tbar);
	}
}


function addcol(client, classname)
{
	client.classList.remove("red");
	client.classList.remove("yellow");
	client.classList.remove("green");
	client.classList.remove("blue");

	client.classList.add(classname);
}


function swap(a,b)
{
	let t=arr[a];
	arr[a]=arr[b];
	arr[b]=t;
	let s1=window.getComputedStyle(bars[a]), s2=window.getComputedStyle(bars[b]);

	t=s1.height;
	bars[a].style.height=s2.height;
	bars[b].style.height=t;
}

function setSpeedSize()
{
	size=document.querySelector("#size").value;
	speed=document.querySelector("#speed").value;
}


async function setDelay(time)
{
	await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, time)
            );
}




init();


let new_arr=document.querySelector("#new");

new_arr.addEventListener('click',function(){
	init();
} );

let changeSize=document.querySelector("#size");

changeSize.addEventListener('input',function(){
	init();
})


let sortBut=document.querySelector("#sort");

sortBut.addEventListener("click",async function(){
	let method=document.querySelector("#method").value;

	if(method==="none")
	{
		alert("Please select the Sorting Method first");
	}
	else
	{
		let allBar=document.querySelectorAll(".special");
		bars=allBar;
		for(let i=0;i<allBar.length;i++)
			addcol(allBar[i],"yellow");

		setSpeedSize();

		butts=document.querySelectorAll("button");

		for(let i=0;i<butts.length;i++) 
			butts[i].disabled=true;

		sizeButton.disabled=true;
		speedButton.disabled=true;
		modeButton.disabled=true;


		if(method==="bubble")
		{
			await bubbleSort();
		}
		else if(method==="selection")
		{
			await selectionSort();
		}
		else if(method==="insertion")
		{
			await insertionSort();
		}
		else if(method==="quick")
		{
			await quickSort();
		}
		else if(method==="merge")
		{
			await mergeSort();
		}



		for(let i=0;i<butts.length;i++) 
			butts[i].disabled=false;

		sizeButton.disabled=false;
		speedButton.disabled=false;
		modeButton.disabled=false;
	}


})



