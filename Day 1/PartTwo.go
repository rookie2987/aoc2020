package main

import (
	"fmt"
	"io/ioutil"
	"strconv"
	"strings"
)

func main() {
	contents, fileErr := ioutil.ReadFile("./nums.txt")
	if fileErr != nil {
		fmt.Println("Error Reading File Contents")
		return
	}

	nums := strings.Split(string(contents), "\r\n")

	for _, item := range nums {
		num, convErr := strconv.Atoi(item)
		if convErr != nil {
			fmt.Println("Failed to convert number ", item)
		}
		for _, item2 := range nums {
			num2, convErr2 := strconv.Atoi(item2)
			if convErr2 != nil {
				fmt.Println("Failed to convert number ", item2)
			}
			for _, item3 := range nums {
				num3, convErr3 := strconv.Atoi(item3)
				if convErr3 != nil {
					fmt.Println("Failed to convert number ", item3)
				}
				if num+num2+num3 == 2020 {
					fmt.Println(num * num2 * num3)
					return
				}
			}
		}
	}
}
