import Header from "./Header.jsx";

function RootLayout({children}){
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <footer></footer>
        </div>
    )
}

export default RootLayout;
