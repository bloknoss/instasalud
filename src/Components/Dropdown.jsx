function Dropdown() {
    return (
        <div class="dropdown open">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="triggerId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Dropdown Button
            </button>
            <div class="dropdown-menu" aria-labelledby="triggerId">
                <button class="dropdown-item" href="#">Action</button>
                <button class="dropdown-item disabled" href="#">
                    Disabled action
                </button>
            </div>
        </div>
        

    );
}

export default Dropdown;
