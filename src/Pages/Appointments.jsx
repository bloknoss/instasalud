import Container from "react-bootstrap/Container";
import Loading from "../assets/loading.gif";

import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function SalaCitas() {
    return (
        <Container className="mt-5">
            <h2>Sala de Citas</h2>
            <Container>
                <Form>
                    <div className="square-container">
                        <div className="square-title">
                            <h4>Dr(a) Raquel Ramirez</h4>
                            <div className="call-square">
                              <img src={Loading} alt="" />
                            </div>
                        </div>
                        <div className="square-title">
                            <h4>Tu cámara</h4>
                            <div className="call-square">
                              <img src={Loading} alt="" />
                            </div>
                        </div>
                    </div>

                    <Form.Group className="mb-3">
                        <Form.Group className="d-flex gap-5 justify-content-around text-center justify-content-center">
                            <Link>
                                <button class="call-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        viewBox="0 0 32 32"
                                        height="32"
                                        fill="none"
                                        class="svg-icon"
                                    >
                                        <path
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke="#fff"
                                            fill-rule="evenodd"
                                            d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </Link>
                            <Link to="/instasalud/gestion">
                                <button class="hang-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="46"
                                        viewBox="0 0 46 46"
                                        height="46"
                                        fill="none"
                                        class="svg-icon"
                                    >
                                        <path
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke="#fff"
                                            fill-rule="evenodd"
                                            d="m14.5037 27.0715c.819-.634 1.7094-1.1699 2.653-1.597.7621-.3521 1.2557-1.1094 1.2699-1.9488-.0073-1.1346.7466-2.1517 1.8673-2.3279 1.7701-.2782 3.5728-.2785 5.3429-.0005 1.1206.1759 1.8744 1.193 1.8669 2.3274.0206.8307.5066 1.5791 1.257 1.9359.981.4173 1.9093.9489 2.7657 1.5838.8765.5876 2.0467.4715 2.791-.2769l2.2507-2.2507c.4294-.4283.6617-1.0157.6414-1.6219-.0308-.5985-.314-1.1559-.7793-1.5337-2.5842-2.0976-5.6309-3.5496-8.888-4.2357-2.9976-.6659-6.1047-.6655-9.1023.0009-3.2453.7041-6.2835 2.1503-8.87655 4.2253l-.12568.1256c-.38501.38-.60996.8929-.62872 1.4334-.02687.6011.20148 1.1854.62847 1.6092l2.25008 2.2501c.7307.7914 1.9343.9202 2.8162.3015z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </Link>
                        </Form.Group>

                    </Form.Group>
                </Form>
            </Container>
        </Container>
    );
}

export default SalaCitas;
