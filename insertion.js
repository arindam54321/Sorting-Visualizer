async function insertionSort()
{
	let del=3000/(speed*size);
	for(let i=1;i<size;i++)
	{
		addcol(bars[i],"blue");


		if(arr[i]<arr[i-1])
		{
			let j=i-1;

			while(j>=0)
			{
				if(arr[j]<=arr[j+1])
					break;
				swap(j,j+1);

				addcol(bars[j],"red");
				if(j+1!=i)
				addcol(bars[j+1],"red");



				await new Promise(resolve =>
	            setTimeout(() => {
	              resolve();
	            }, del)
	            );


				addcol(bars[j],"yellow");
				if(j+1!=i)
				addcol(bars[j+1],"yellow");
	            j--;
			}
		}
		await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, del)
        );
		addcol(bars[i],"yellow");
	}

	for(let i=size-1;i>=0;i--)
	{
		addcol(bars[i],"green");
		await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, del)
        );


	}
}