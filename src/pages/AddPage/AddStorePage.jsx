import { Layout } from './Add.style'
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import StoreInput from '../../components/Input/StoreInput';
import Button from '../../components/Detail/Button';
import styled from 'styled-components';

export default function SignUpPage() {
  return (
    <Layout.Display>
        <GoBackBar TopBarName="맛집 등록하기" />
        <Layout.Container>
            <Layout.HeadText><Star>숨겨진 맛집</Star>을 등록해 벗들에게 공유해주세요!</Layout.HeadText>
            
            <Layout.InputBox>
                <Layout.Input>
                <StoreInput InputType="식당 이름" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="위치" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="상세 주소" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="전화번호" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="카테고리" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="주차 가능 여부" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="홈페이지" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="영업 시간" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="가격대" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="예약 가능 여부" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="식당 대표 사진" />
                </Layout.Input>
            </Layout.InputBox>
            <Layout.Blank2/>
            <Layout.Blank2/>
            <Text>메뉴 등록하기</Text>
            <Button
              onClick={() => {}}
              children="세부 메뉴 등록하기"
              width="220px"
              arrow={true}
            />
            <Layout.Blank/>

            <Layout.HeadText><Star>* </Star>은 필수 입력 항목입니다.</Layout.HeadText>
            <Layout.HeadText>* 부정확한 정보는 무통보 삭제될 수 있습니다</Layout.HeadText>
            <Layout.Blank/>

      </Layout.Container>
      <Layout.Blank/>
      <Layout.Blank/>
      <BottomNavigateBar></BottomNavigateBar>
    </Layout.Display>
    

  );
}

const Star = styled.span`
font-weight: 550;
color: #FF0000;
`;

const Text = styled.p`
font-size: 17px;
font-weight: 550;
margin: 0 2px 9px 4px;
`;