import { useLoaderData, useNavigation } from "react-router-dom";
import Navigation from "../../components/Navigation"

type UserData = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export async function  homeLoader(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const jsonResult:UserData = await res.json();
        return jsonResult as UserData;
    } catch(e){
        console.log(e)
        throw new Error('Failed to fetch data');
    }
    
}

export default function HomePage() {
    const result = useLoaderData() as UserData;
    console.log("result", result)
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <h1>Loading!</h1>;
    }
    if (Object.keys(result).length === 0) {
        return (
            <>
                <Navigation />
                <div>Welcome to Auth0 login </div>
                <h1>Component not rendered due to error</h1>
            </>
        )
    }
    return (
        <>
            <Navigation />
            <div>Welcome to Auth0 login </div>
            <h1>{result.title}</h1>
        </>
    )
}