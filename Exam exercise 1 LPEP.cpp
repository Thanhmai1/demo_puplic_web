#include<stdio.h>
int main(){
	int n = 5;	//Ğau vao
	printf("Enter the number: \n");		//In ra 
	int so_chan_dau = -1;	//Bien dau vao
	int arr[n];	//Tao mang 
	for(int i = 0 ; i < n ; i ++){//Vòng for
		scanf("%d", &arr[i]);	//Nhap
		if(arr[i] % 2 == 0){//If condition 
			so_chan_dau = arr[i];//gán so_chan_dau voi arr[i]
		}
	}	
	if (so_chan_dau != -1){//lenh if
		printf("Last Even Number: %d", so_chan_dau);//in ra last even nuber
    }
	else {//lenh else
		printf("Don have Even Number");//in ra Ko có so chan
	}
	return 0;
}
