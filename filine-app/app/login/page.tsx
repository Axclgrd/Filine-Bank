import { title } from "@/components/primitives";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import {Checkbox} from "@nextui-org/checkbox";
import {MailIcon} from '../../components/MailIcon.jsx';
import {LockIcon} from '../../components/LockIcon.jsx';

// <Modal
// 	isOpen={isOpen}
// 	onOpenChange={onOpenChange}
// 	placement="top-center"
// >
// 	<ModalContent>
// 		{(onClose) => (
// 			<>
// 				<ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
// 				<ModalBody>
// 					<Input
// 						autoFocus
// 						endContent={
// 							<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
// 						}
// 						label="Email"
// 						placeholder="Enter your email"
// 						variant="bordered"
// 					/>
// 					<Input
// 						endContent={
// 							<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
// 						}
// 						label="Password"
// 						placeholder="Enter your password"
// 						type="password"
// 						variant="bordered"
// 					/>
// 					<div className="flex py-2 px-1 justify-between">
// 						<Checkbox
// 							classNames={{
// 								label: "text-small",
// 							}}
// 						>
// 							Remember me
// 						</Checkbox>
// 						<Link color="primary" href="#" size="sm">
// 							Forgot password?
// 						</Link>
// 					</div>
// 				</ModalBody>
// 				<ModalFooter>
// 					<Button color="danger" variant="flat" onPress={onClose}>
// 						Close
// 					</Button>
// 					<Button color="primary" onPress={onClose}>
// 						Sign in
// 					</Button>
// 				</ModalFooter>
// 			</>
// 		)}
// 	</ModalContent>
// </Modal>

export default function DocsPage() {
	return (
		<div>
			<div className="grid text-center items-center justify-center gap-3">
				<h2> Connexion :</h2>
				<Input
					autoFocus
					endContent={
						<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
					}
					label="Email"
					placeholder="Enter your email"
					variant="bordered"
				/>
				<Input
					endContent={
						<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
					}
					label="Password"
					placeholder="Enter your password"
					type="password"
					variant="bordered"
				/>
				<div className="flex py-2 px-1 justify-between">
					<Checkbox classNames={{label: "text-small",}}>
					Remember me
					</Checkbox>
					<Link color="primary" href="#" size="sm">
						Forgot password?
					</Link>
				</div>

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
