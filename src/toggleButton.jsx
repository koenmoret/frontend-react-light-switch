function toggleButton({object, state}) {

    return (
        <button
            type="button"
            onClick={() => object(!state)}
        >
            {state === false ? "Turn on" : "Turn off"}
        </button>

    );
}

export default toggleButton;