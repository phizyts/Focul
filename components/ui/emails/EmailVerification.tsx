import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Html,
	Link,
	Preview,
	Section,
	Text,
	Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailVerificationProps {
	url: string;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({ url }) => {
	return (
		<Html>
			<Head />
			<Preview>Verify your email address for Oxcel</Preview>
			<Tailwind>
				<Body className="bg-gray-50 font-sans">
					<Container className="mx-auto py-8 px-4 max-w-[600px]">
						<Section className="bg-white rounded-lg shadow-sm p-8">
							<div className="mb-8">
								<Img
									src={`https://i.ibb.co/rZqZ6Q2/New-Project-2-4-1.png`}
									width="119"
									height="30"
									alt="Oxcel"
									className="mx-auto"
								/>
							</div>

							<Heading className="text-3xl font-bold text-gray-900 text-center mb-6">
								Verify your email address
							</Heading>

							<Text className="text-gray-700 text-lg mb-8 text-center">
								Thanks for signing up for Oxcel! Please verify your email address by clicking
								the button below.
							</Text>

							<Section className="text-center mb-8">
								<Button
									className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-base transition-colors"
									href={url}
								>
									Verify Email Address
								</Button>
							</Section>

							<Text className="text-gray-600 text-sm text-center mb-4">
								If you can't click the button, copy and paste this URL into your browser:
							</Text>
							<Text className="text-gray-600 text-sm text-center mb-8">
								<Link href={url} className="text-blue-600 break-all">
									{url}
								</Link>
							</Text>

							<hr className="border-gray-200 mb-8" />

							<Text className="text-gray-500 text-xs text-center">
								2024 Oxcel, the Ultimate Solution to Your Student Life.
								<br />
								<br />
								All rights reserved.
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default EmailVerification;
