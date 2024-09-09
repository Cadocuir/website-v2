<footer>
	<span>&copy; 2023 Cadocuir Maroquinerie. Faccio Nathalie </span> &nbsp;<a href="tel:+33479320026"
		>04 79 32 00 26</a
	>&nbsp;
	<a href="mailto:info@cadocuir.com?subject=Contact&body=Send%20by%20cadocuir.com"
		>info@cadocuir.com</a
	>
</footer>

<style lang="scss">
	footer {
		margin-top: 50px;
		width: 100%;
		height: 50px;
		font-family: $font-family-main;
		// background-color: $color-darkblue;
		border-top: 2px solid $color-primary;
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		position: relative;
		z-index: 1;

		@media #{$media-mobile} {
			flex-direction: column;
            height: fit-content;
            justify-content: space-between;
            padding: 16px;
			span,
			a {
				padding:  0 !important;
			}
		}

		span,
		a {
			text-decoration: none;
			color: $color-darkblue;
			padding: 0 16px;
		}
	}
</style>
