import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = { id: string; children: React.ReactNode };
type containerOptions = { id: string; mountNode?: HTMLElement };

const PORTAL_ERROR_MSG = "There is no portal container in markup.";

export const Portal: FC<PortalProps> = ({ children, id }) => {
    const [container, setContainer] = useState<HTMLElement>();

    useEffect(() => {
        if (id) {
            const portalContainer = document.getElementById(id);

            if (!portalContainer) {
                throw new Error(PORTAL_ERROR_MSG);
            }

            setContainer(portalContainer);
        }
    }, [id]);

    return container ? createPortal(children, container) : null;
};

const createContainer = (options: containerOptions) => {
    if (document.getElementById(options.id)) {
        return;
    }

    const { id, mountNode = document.body } = options;

    const portalContainer = document.createElement("div");

    portalContainer.setAttribute("id", id);
    mountNode.appendChild(portalContainer);
};

export { createContainer, PORTAL_ERROR_MSG };
export default Portal;
