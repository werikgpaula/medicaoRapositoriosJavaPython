// Engenharia de Software - Praça da Liberdade
// Nome: Werik Gonçalves de Paula
const fetch = require("node-fetch");
const GITHUBTOKEN = '27b7d6057ab71ef9a0f4f700277f53e6b5c0787a'

// RQ 01. Sistemas populares são maduros/antigos?
// Métrica: idade do repositório (calculado a partir da data de sua criação)

exports.java = function (){
	return fetch("https://api.github.com/graphql", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	      "Authorization": `Bearer ${GITHUBTOKEN}`
	    },
	    body: JSON.stringify({
	      query: (`query java{
			search(query:"stars:>0 primarylanguage:JAVA sort:stars", type:REPOSITORY, first:100){
				pageInfo{
					startCursor
					hasNextPage
					endCursor
				}
				nodes{
					... on Repository {
						nameWithOwner
						createdAt
						stargazers {
					      totalCount
					    }
					    watchers {
					      totalCount
					    }
					    forks {
					      totalCount
					    }
					}
				}
			}
		}`) 	
	    })
	  })
	    .then(result => {
	      return result.json();
	    })
	    .then(data => {
	  		return data
	    });
}

// RQ 03. Sistemas populares lançam releases com frequência?
// Métrica: total de releases
exports.python = function (){
	return fetch("https://api.github.com/graphql", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	      "Authorization": `Bearer ${GITHUBTOKEN}`
	    },
	    body: JSON.stringify({
	      query: (`query python{
			search(query:"stars:>0 primarylanguage:PYTHON sort:stars", type:REPOSITORY, first:100){
				pageInfo{
					startCursor
					hasNextPage
					endCursor
				}
				nodes{
					... on Repository {
						nameWithOwner
						createdAt
						stargazers {
					      totalCount
					    }
					    watchers {
					      totalCount
					    }
					    forks {
					      totalCount
					    }
					}
				}
			}
		}`) 	
	    })
	  })
	    .then(result => {
	      return result.json();
	    })
	    .then(data => {
	  		return data
	    });
}
