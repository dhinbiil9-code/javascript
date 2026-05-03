// let name = "Ahmed"
// console.log(name)

async function fetchnames() {
    try {
        const response = await fetch("https://randomuser.me/api/?results=5")

        if (!response.ok) {
            throw new Error("network response was not ok");
        }
        const data = await response.json();
        
        const names = data.results.map(
            (user) => ${user.name.first} ${user.name.last},
                       );
        console.log(names);

    } catch (error) {
        console.error("error fetching names:", error);
}
}
fetchnames();