// @ts-ignore
import NoticeElement from '../lib/NoticeElement.svelte'

class Notice {
    constructor(props) {
        let aiContentEl = document.querySelectorAll('[data-ai-content]');
        aiContentEl.forEach(element => {
            let container = document.createElement('div')
            container.classList.add('agcn-notice')
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