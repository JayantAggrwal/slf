exports.handler = async()=>
{   
    const apidata = await fetch("https://pokeapi.co/api/v2/pokemon/1")
    const response = await apidata.json()

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }

}