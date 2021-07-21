package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type search struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Link        string `json:"link"`
}

func main() {
	http.HandleFunc("/search", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		//so the route return cors headers on options
		if r.Method != "POST" {
			return
		}
		ret := []search{}
		err := json.NewDecoder(r.Body).Decode(&ret)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		for _, v := range ret {
			//for readability in console
			fmt.Printf("%s\t(%s)\n\t%s\n\n", v.Title, v.Link, v.Description)
		}
	})
	http.ListenAndServe(":8080", nil)
}
