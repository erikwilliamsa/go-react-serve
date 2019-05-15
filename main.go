package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.Handle("/", LogHits())
	http.ListenAndServe(":3000", nil)
}

var i = 0

func LogHits() http.Handler {
	i++
	fmt.Printf("There have been %d hits to the page!\n", i)
	return http.FileServer(http.Dir("./build"))

}
