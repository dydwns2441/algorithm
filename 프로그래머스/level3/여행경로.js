 function solution(tickets){
            let routes = [];
                        //               "ICN"
            function dfs (extraTickets,destination,route ) {
                if(extraTickets.length===0){
                    routes.push(route)
                    console.log(routes);
                }
                else{
                    extraTickets.forEach(([departure, arrival], index) => {
                        if(destination === departure){
                            
                            const newTickets = extraTickets.slice(); //복사를 해서
                            newTickets.splice(index,1)   //인천에서 샌프란가는거를 뽑아내는거죠 //저게 빠진 나머지겠죠..
                            dfs(newTickets, arrival, route.concat(arrival))
                        }
                    });
                }
            }
            dfs(tickets , "ICN" , ["ICN"])
            return  routes.sort()[0];
 }
        
 let tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]];
console.log(solution(tickets));