<script>
    export let error;
    export let status;
    import { page } from '$app/state';
</script>

<!---code provided by lecturer LIBOR-->

<div class="container" role="alert">
    <h1 class="error-code">{status ?? 404}</h1>

    {#if status === 404 || (!status && error == null)}
        <p class="message">
            Sorry, the page <code>{page.url.pathname}</code> doesn’t exist.
        </p>
    {:else if error}
        <p class="message">{error.message}</p>
    {:else}
        <p class="message">An unknown error occurred.</p>
    {/if}

    <a class="home-button" href="/">← Go back home</a>
</div>


<style>
    .container {
        min-height: 82.5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--space-xl);
        background-color: var(--color-bg);
        color: var(--text-secondary);
        animation: fadeIn 0.6s ease-out;
    }

    .error-code {
        font-size: 6rem;
        font-weight: 700;
        margin: 0;
        color: transparent;
        background: var(--gradient-brand);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: popIn 0.5s ease-out;
    }

    .message {
        font-size: var(--font-lg);
        margin: 1rem 0;
        color: var(--text-primary);
    }

    code {
        background-color: rgba(0, 0, 0, 0.05);
        padding: 0.3rem 0.6rem;
        border-radius: var(--radius-sm);
        font-size: 1rem;
        font-family: var(--font-code, monospace);
    }

    .home-button {
        margin-top: 1.5rem;
        padding: var(--space-sm) var(--space-md);
        color: #fff;
        background: var(--gradient-brand);
        border: none;
        text-decoration: none;
        border-radius: var(--radius-md);
        font-weight: 500;
        transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        box-shadow: var(--shadow-sm);
        position: relative;
        overflow: hidden;
    }

    .home-button:hover,
    .home-button:focus {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
    }

    @keyframes popIn {
        from { opacity: 0; transform: scale(0.85); }
        to { opacity: 1; transform: scale(1); }
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: var(--mobile-breakpoint)) {
        .error-code {
            font-size: var(--font-xxl);
        }

        .message {
            font-size: var(--font-lg);
        }

        .home-button {
            font-size: var(--font-base);
        }
    }
</style>
  