#include<stdio.h>
float average(int s[],int n){
	int sum = 0;
	for(int i =0;i<n;i++){
		sum += s[i];
	}
	float avg = (float) sum /n;
	return avg;
}
int main(){
	int n = 4;
	int s[n];
	printf("Enter array : \n");
	for(int i = 0; i<n;i++){
		scanf("%d",&s[i]);
	}
	float result = average (s , n);
	printf("Average : %.2f",result );
	return 0;
}

