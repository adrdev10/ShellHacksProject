package main

import "fmt"

func main() {
	fmt.Println("Hello, World")
	a:= print()
	fmt.Println(a)

	count := 10
	for index := 0; index < count; index++ {
		fmt.Println(index)
	}


	fmt.Println(a)
}

func print()(string){
	return "Hello Alex"
}