package main

import (
	"fmt"
	"html"
	"net/http"
)

func main() {
	http.HandleFunc("/search", func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("Hello, %q", html.EscapeString(r.URL.Path))
	})
	http.ListenAndServe(":8080", nil)
}
