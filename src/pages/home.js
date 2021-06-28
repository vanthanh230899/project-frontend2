import  { JumbotronContainer }  from '../containers/jumbotron';
import  { FooterContainer }  from '../containers/footer';
import  { FaqsContainer }  from '../containers/faqs';
import  { HeaderContainer }  from '../containers/header';
import  { OptForm, Feature } from '../components';


export default function Home(){
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</Feature.Title>
                    <Feature.SubTitle>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</OptForm.Text>
                        <OptForm.Break></OptForm.Break>
                        <OptForm.Input placeholder="Địa chỉ email" />
                        <OptForm.Button>Bắt đầu</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}