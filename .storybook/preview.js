import '../src/styles/index.scss'
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	backgrounds: { default: 'dark' },
}

export const decorators = [
(Story) => (
	<div style={{ margin: '3em' }}>
	<Story />
	</div>
)
]