#include<stdio.h>
int main(){
	int n = 5;
	printf("Enter the numbers :\n ");
	int lastEvenNumber = -1;	
	int arr [n];
	for(int i = 0;i < n;i++){
		scanf("%d", &arr[i]);
		if(arr [i] % 2 == 0 ){
			lastEvenNumber = arr[i];
		}
	}
	if (lastEvenNumber != -1){
		printf("Last Even number is: %d",lastEvenNumber);
	}
	else
		printf("No have Even Number");
	return 0;
}
