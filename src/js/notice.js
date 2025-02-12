// @ts-ignore
import NoticeElement from '../lib/NoticeElement.svelte'

class Notice {
    constructor(props) {
        let aiContentEl = document.querySelectorAll('[data-ai-content]');
        aiContentEl.forEach(element => {
            // @ts-ignore
            let position = element.dataset.agcnPosition;

            let classes = {
                left: "notice-left",
                right: "notice-right",
                center: "notice-center",
            };

            position = classes[position] || "notice-left";

            let container = document.createElement('div')
            container.classList.add('agcn-reset', 'agcn-variables', 'agcn-notice', position)
            element.appendChild(container)

            new NoticeElement({
                target: container,
                props: {
                    config: props.config,
                    // @ts-ignore
                    notice: element.dataset.aiContent,
                    openModal: () => {
                        props.openModal();
                    },
                }
            });

        });
    }
}

export default Notice;