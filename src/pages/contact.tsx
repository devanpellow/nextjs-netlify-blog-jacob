import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import { SocialList } from '../components/SocialList';

export default function Contact() {
	return (
		<Layout>
			<BasicMeta url={'/'} />
			<OpenGraphMeta url={'/'} />
			<TwitterCardMeta url={'/'} />
			<div className="container">
				<div className="full-width">
					<h1>
						<span className="fancy">Jacob</span> Robinson
						<span className="fancy">.</span>
					</h1>
					<span className="handle">@JacobRobinsonJD</span>
					<SocialList />
					<div className="contact-container">
						<form name="contact" method="POST" data-netlify="true">
							<div className="form-group">
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Name"
									required
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Email"
									required
								/>
							</div>
							<div className="form-group">
								<textarea
									id="message"
									name="message"
									rows={5}
									required
									placeholder="Message"
								></textarea>
							</div>
							<button type="submit">Send</button>
						</form>
					</div>
				</div>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					flex: 1 1 auto;
					padding: 0 4rem;
					max-width: 80vw;
					min-width: 80vw;
				}
				h1 {
					font-size: 2.5rem;
					margin: 0;
					font-weight: 500;
				}
				h2 {
					font-size: 1.75rem;
					font-weight: 400;
					line-height: 1.25;
				}
				.fancy {
					color: #9d2828;
				}
				.handle {
					display: inline-block;
					margin-top: 0.275em;
					color: #9b9b9b;
					letter-spacing: 0.05em;
				}

				.full-width {
					width: 100%;
				}

				.contact-container {
					display: flex;
					flex-direction: column;
					align-items: start;
					margin: 80px 0;
				}

				form {
					display: flex;
					flex-direction: column;
					width: 80%;
				}

				.form-group {
					display: flex;
					flex-direction: column;
					margin-bottom: 1rem;
				}

				label {
					font-size: 1.2rem;
					margin-bottom: 0.5rem;
				}

				input,
				textarea {
					padding: 0.5rem;
					border: 1px solid #ccc;
					border-radius: 5px;
					font-size: 1rem;
				}

				button[type='submit'] {
					background-color: #9d2828;
					color: #fff;
					border: none;
					border-radius: 5px;
					padding: 1rem;
					font-size: 1.2rem;
					margin-top: 1rem;
					cursor: pointer;
				}

				button[type='submit']:hover {
					background-color: #7d2121;
				}

				@media (min-width: 769px) {
					h1 {
						font-size: 3rem;
					}
					h2 {
						font-size: 2.25rem;
					}
				}
			`}</style>
		</Layout>
	);
}
