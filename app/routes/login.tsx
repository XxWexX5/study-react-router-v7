import { Form, redirect } from "react-router";
import type { Route } from "./+types/login";

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const username = String(formData.get("username") || "".trim());
    const password = String(formData.get("password") || "").trim();

    if(!username || !password) {
        return {
            message: "Informe usuario e senha."
        }
    }

    return redirect("/")
}

export default function Index({ actionData }: Route.ComponentProps) {
    console.log(actionData);

    return (
        <main className="min-h-dvh flex items-center justify-center p-4">
            <div className="w-full max-w-sm border rounded-lg p-6 shadow-sm">
                <h1 className="text-xl font-semibold mb-4">Acessar conta</h1>

                <Form method="post" replace className="space-y-3">
                    <div className="grid gap-1">
                        <label htmlFor="username" className="text-sm font-medium">
                            Usuário
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="grid gap-1">
                        <label htmlFor="password" className="text-sm font-medium">
                            Senha
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 disabled:opacity-60"
                    >
                        "Entrar"
                    </button>
                </Form>
            </div>
        </main>
    );
}