import { AppProvider } from "./data/context/AppContext";
import { AuthProvider } from "./data/context/AuthContext";
import MyRoutes from "./routes/MyRoutes";


function App() {

  return (
    <AuthProvider>
      <AppProvider>
        <MyRoutes/>
      </AppProvider>
    </AuthProvider>
  )
}

export default App
