import { isBrowser } from "../utils";

const QUESTION_DELAY = 800;

const EXAM_RESULTS_RANGE = [
    {
        start: 0,
        end: 40,
        color: '#e74c3c'
    },
    {
        start: 40,
        end: 80,
        color: '#f39c12',
    },
    {
        start: 80,
        end: 100,
        color: '#2ecc71'
    }
];

const FILTER_OPTIONS = [
    {
        title: 'همه',
        value: 'ALL',
        validator: () => true,
        getNotFoundText: () => 'مغالطه‌ای با این نام یافت نشد...'
    },
    {
        title: 'خطاهای آزمون',
        value: 'WRONG_ANSWERS',
        validator: ({ id }) => {
            const remindingFallaciesString = isBrowser ? localStorage.getItem('remindingFallacies') : '';
            const remindingFallacies = remindingFallaciesString ? JSON.parse(remindingFallaciesString) : [];
            return remindingFallacies.includes(id);
        },
        getNotFoundText: () => {
            const remindingFallaciesString = isBrowser ? localStorage.getItem('remindingFallacies') : '';
            if (remindingFallaciesString === null) {
                return 'شما هنوز در هیچ آزمونی شرکت نکرده‌اید. پس از شرکت در آزمون، در صورتی که در تشخیص بعضی مغالطات خطا داشته باشید، آن‌ها اینجا نمایش داده می‌شوند...'
            } else if (remindingFallaciesString === '[]') return 'هیچ خطایی برای نمایش وجود ندارد...';
            else return 'در میان خطاهای آزمون شما، مغالطه‌ای با این نام یافت نشد...'
        }
    }
]

export { QUESTION_DELAY, EXAM_RESULTS_RANGE, FILTER_OPTIONS };
