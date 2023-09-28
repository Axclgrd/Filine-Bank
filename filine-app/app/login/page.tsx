import { title } from "@/components/primitives";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";

export default function DocsPage() {
	return (
		<div>
			<div className="grid text-center items-center justify-center gap-3">
				<h2> Connexion :</h2>

				<Input type="id" label="Id" className="max-w-[220px]"/>
				<Input type="email" label="Email" className="max-w-[220px]"/>
				<Link
					href="/"
				>
					<Button color="primary" className="w-full">Connexion</Button>
				</Link>
				<Link
					href="/register"
				>
					<Button color="success" className="w-full">Ouvrir un compte</Button>
				</Link>

			</div>
		</div>
	);
}
