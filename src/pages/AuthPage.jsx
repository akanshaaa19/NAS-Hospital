import { InputField } from "../components/ui/InputField"

export const AuthPAge = () => {
    return <section className="bg-light flex items-center justify-center h-screen">

        <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h1 class="text-2xl font-semibold text-purple-700 mb-4">Login</h1>
            <form action="#" method="POST">
                <div class="mb-4">
                    <label for="username" class="block text-dark">Email</label>
                    <InputField placeholder={"Email"} type={"email"} />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-dark">Password</label>
                    <InputField placeholder={"Name"} type={"password"} />
                </div>
                <button type="submit" class="bg-purple-700 text-white rounded-lg py-2 px-4 hover:bg-purple-800 focus:outline-none focus:bg-purple-800">
                    Login
                </button>
            </form>
        </div>
    </section>
}