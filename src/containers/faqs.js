import faqsData from '../fixtures/faqs.json';
import { Accordion, OptForm } from '../components'

export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Câu hỏi thường gặp</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />
            <OptForm>
                <OptForm.Text>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</OptForm.Text>
                <OptForm.Break></OptForm.Break>
                <OptForm.Input placeholder="Địa chỉ email" />
                <OptForm.Button>Bắt đầu</OptForm.Button>
            </OptForm>
        </Accordion>
    );
}