<script>
    import {fade, scale} from 'svelte/transition';
    export let isOpen = false;
    export let title = "Modal Title";
</script>

{#if isOpen}
    <div class = "modal-overlay" transition:fade>
        <div class = "modal-content" transition:scale= {{duration: 300}}> 
            <h2>{title}</h2>
            <p>Special Thanks to our lecturers for WEB UI Design, Libor Zachoval and Milu Phillip
            </p>
            <button on:click={() => isOpen = false}>Close</button>
    </div>
    </div>
    {/if}

    <style>
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background: white;
            padding: 0rem;
            border-radius: 8px;
            width: 300px;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .modal-content button {
            background: #007bff;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
             margin-top: 5px;
            margin-bottom: 10px;
            transition: background 0.3s ease;
        }

        .modal-content button:hover {
            background: #0056b3;
        }
    </style>