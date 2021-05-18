async function partition(low,high)
{
	let part=high,ret=low-1,del=3000/(size*speed);
	addcol(bars[part],"red");
	for(let j=low;j<=high;j++)
	{
		addcol(bars[j],"blue");
		if(arr[j]<=arr[part])
		{
			ret++;
			swap(ret,j);
			addcol(bars[ret],"red");

		}



		await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, del)
            );
	}

	for(let j=low;j<=high;j++)
		addcol(bars[j],"yellow");

	await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, del)
            );

	addcol(bars[ret],"green");
	return ret;
}


async function quickSortMin(low,high)
{
	if(low>high) return;
	let p=await partition(low,high);
	await quickSortMin(low,p-1);
	await quickSortMin(p+1,high);
}

async function quickSort()
{
	await quickSortMin(0,size-1);
}