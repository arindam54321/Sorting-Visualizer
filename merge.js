async function mergeSort()
{
	await mergeSortMin(0,size-1);
	let del=3000/(size*speed)
	for(let i=0;i<size;i++)
	{
		addcol(bars[i],"green");
		await new Promise(resolve =>
	            setTimeout(() => {
	              resolve();
	            }, del)
	            );
	}
}

async function mergeSortMin(low,high)
{
	if(low>=high) return;
	let mid=Math.floor((low+high)/2);
	await mergeSortMin(low,mid);
	await mergeSortMin(mid+1,high);

	// console.log(mid)
	// console.log(arr.slice(low,mid+1),'+');
	// console.log(arr.slice(mid+1,high+1),'=');

	for(let i=low;i<=high;i++) addcol(bars[i],"blue");

	let i=low,now=mid+1,del=3000/(size*speed);
	while(now<=high)
	{
		
		addcol(bars[now],"red");
		while(arr[i]<arr[now])
		{
			addcol(bars[i],"red");
			await new Promise(resolve =>
	            setTimeout(() => {
	              resolve();
	            }, del)
	            );

			addcol(bars[i],"blue");
			i++;
		}

		addcol(bars[i],"red");

		if(arr[i]>=arr[now])
		{
			for(let j=now;j>=i+1;j--){
				swap(j,j-1);

			}
		}

		await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, del)
            );

		addcol(bars[i],"blue");
		addcol(bars[now],"blue");
		now++;
	}

	if(low!=0||high!=size-1){
		for(let i=low;i<=high;i++) 
			addcol(bars[i],"yellow");
	}
	// console.log(arr.slice(low,high+1));

}