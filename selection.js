async function selectionSort(){
	let del=3000/(size*speed);
	for(let i=0;i<size;i++)
	{
		let min=i,minVal=arr[i];
		for(let j=i+1;j<size;j++)
		{
			addcol(bars[min],"red");
			addcol(bars[j],"red");

			if(arr[j]<arr[min])
			{
				addcol(bars[min],"yellow");
				min=j;
				addcol(bars[min],"red");
			}

			await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, del)
            );

			if(min!=j)
				addcol(bars[j],"yellow");


		}
		swap(i,min);
		addcol(bars[min],"yellow");
		addcol(bars[i],"green");
	}
}