---
layout: post
title: "Augmented Coding: Beyond the Vibes"
date: 2025-06-29 15:58:00+0900
tags: [idea]
---

이 글은 Kent Beck의 [Augmented Coding: Beyond the Vibes](https://tidyfirst.substack.com/p/augmented-coding-beyond-the-vibes)를 GPT를 이용해 번역한 글입니다.

---

최근 나는 증강 코딩(augmented coding)을 활용해 B+ 트리 라이브러리를 만드는 야심찬 프로젝트에서 좋은 멈춤 지점을 맞이했다. 그 결과물이 바로 BPlusTree3다. 러스트와 파이썬으로 구현된 이 라이브러리는 성능 면에서 경쟁력이 있으며, 어쩌면 실제 프로덕션에 투입해도 될 정도다. 나는 한 친구와 마주 앉아 이 여정을 이야기하고, 이 경험이 생성형 AI 시대의 프로그래밍 미래에 대해 어떤 통찰을 주는지 되돌아보았다.

---

### 처음에 B+ 트리를 구현하게 된 계기는 무엇이었나요?

증강 코딩의 엄청난 잠재력을 체감하기 시작하면서, 과거에 기술적으로 역부족이라 손대지 못했던 프로젝트들이 떠올랐어요. 그중 하나가 특정 목적을 위한 데이터베이스였죠. 다시 그 데이터베이스 프로젝트를 구현해보려 했을 때, B+ 트리라는 자료구조를 충분히 이해하지 못하고 있다는 걸 깨달았고, 그래서 목표를 B+ 트리로 전환하게 됐어요.

### 실제로 ‘증강 코딩(augmented coding)’은 당신에게 어떤 의미인가요?

그 즈음 저는 ‘증강 코딩’이 ‘바이브 코딩(vibe coding)’과는 전혀 다르다는 것도 깨닫게 되었어요. 완전히 새로운 프로그래밍 워크플로우의 공간을 탐색하고 있었던 거죠. 그래서 프로젝트 범위를 전체 데이터베이스에서 B+ 트리 하나로 줄이긴 했지만, 동시에 증강 코딩으로 실제 프로덕션 수준의, 성능 면에서도 경쟁력 있는 라이브러리를 만들 수 있는지를 실험하기 위해 범위를 확장하기도 했어요. Rust도 배우고 싶었고요. 그러니까… 상황이 꽤 복잡했죠.

### 그렇다면 ‘증강 코딩’과 ‘바이브 코딩’의 차이를 설명해줄 수 있나요?

바이브 코딩은 코드 자체엔 신경을 안 쓰고, 시스템이 원하는 방식으로 작동하기만 하면 돼요. 오류가 생기면 그냥 다시 지니한테 던져서 그럭저럭 괜찮은 해결책이 나오길 바라는 식이죠. 반면 증강 코딩에서는 코드 그 자체, 복잡성, 테스트, 커버리지 같은 요소들에 관심을 둬요. 증강 코딩의 가치 체계는 수작업 코딩과 비슷해요—깔끔하게 잘 돌아가는 코드. 단지, 그 코드를 제가 직접 많이 타이핑하지 않을 뿐이에요.

### B+ 트리 프로젝트에 도전하기로 했을 때, 어디서부터 시작했나요?

초기 커밋을 보면, 제가 지니(genie)에게 TDD를 시도하게 하려 했다는 걸 알 수 있을 거예요. 그리고 레포 이름이 ‘BPlusTree3’인 것도 보이죠. 앞서 두 번의 시도는 복잡도가 너무 높아져서, 지니이 완전히 멈춰버렸어요. 그래서 이번엔 설계에 더 깊이 개입했고, 지니가 멋대로 앞서서 코딩하지 않도록 신경 썼어요.

### 설계에 더 깊이 개입했다는 건, 실제로 어떤 방식이었나요?

제가 사용한 시스템 프롬프트는 부록으로 따로 덧붙일게요. 저는 지니의 중간 결과를 훨씬 더 주의 깊게 지켜봤고, 비생산적인 흐름이면 곧장 개입해 멈출 준비가 돼 있었어요. 코드가 어떻게 나왔는지 보고, “다음 테스트에선 키를 역순으로 넣어봐” 같은 식으로 직접 제안했죠. 그러면 지니의 작업을 확인하면서, 요청한 대로 수행됐는지를 계속 검토했어요.

### AI가 길을 잘못 들고 있다는 신호는 뭐였나요?

루프요.

제가 요청하지 않은 기능을 넣으려 할 때요. 그게 아무리 그럴듯한 다음 단계여도요.

그리고 테스트를 비활성화하거나 삭제하는 식으로 지니이 ‘속임수’를 쓰려 할 때요. 그건 특히 주의깊게 봤어요.

### 최종 결과물은 어땠나요?

정확성과 성능 면에서는 만족스러워요. 하지만 코드 품질은 그렇지 않아요. 그 코드를 리터러리 프로그램(literate program) 방식으로 작성하려 해보면, 우연히 생긴 복잡성이 너무 많아요. 지금도 여전히, 단순함에 대한 제 감각만큼 지니도 신경 쓰게 만드는 방법을 고민 중이에요.

증강 코딩의 즐거운 점 중 하나는, 제가 지니에게 성능 벤치마크를 직접 작성하게 했다는 거예요. Rust의 BPlusTreeMap과 Rust 표준 라이브러리의 BTreeMap, 그리고 Python의 BPlusTreeMap과 Python의 SortedDict를 비교했죠. 둘 다 몇몇 연산에서는 제가 만든 코드가 느렸지만, 범위 스캔(range scan)—즉, 키 리스트를 순회하는 작업에서는 더 빨랐어요.

그리고 Python 버전에 대해서는 따로 말해야겠네요. 이건 좀 놀라웠거든요.

### Python 버전은 뭐가 놀라웠나요?

Rust 버전에서는 어느 정도 진전이 있었지만, 자료구조 자체의 복잡성과 Rust의 메모리 소유권 모델이 맞물리면서 지니가 꼬이기 시작했어요. 완전히 포기하고 4번째 버전을 시도하기보다는, 좀 위험한 실험을 해보기로 했죠.

지니에게 Python 버전을 쓰게 했어요. 테스트는 그대로 두고, 언어만 제약이 덜한 Python으로 바꾼 거죠. 알고리즘 자체는 꽤 단단히 만들어졌어요. 그런 다음 지니에게 이렇게 말했죠. “Rust 코드는 지우고, Python 코드를 그대로 Rust로 옮겨줘.” 그때 마침 Augment의 Remote Agent에 접근 권한이 생겼거든요. [참고: Augment는 제 뉴스레터의 스폰서입니다.] 재작성 작업을 원격 컴퓨터 어딘가에 보냈고, 거의 제 개입 없이 돌아온 코드는 쓸 만했어요.

그 덕분에 지니의 막힘이 풀렸어요. 이제 우리는 잘 작동하지만 느린 Python 코드와, 대부분 작동하면서 빠른 Rust 코드를 갖게 된 거죠. 그때 지니이 제안했어요. “진짜 성능 경쟁력 있는 Python 라이브러리를 만들고 싶다면 C 확장을 작성해야 합니다.” 저는 어깨가 축 처졌죠—그건 배울 것도 많고, 일이 너무 많아 보여요.

💡 하지만 제가 직접 할 필요는 없잖아요? “지니야, C 확장 써줘.” 드르륵 드르륵 드르륵. 짠—그리고 결과물은 Python 내장 자료구조에 거의 맞먹는 속도를 내더군요.

### 이번 여정을 돌아보면서, 증강 코딩에 대해 어떤 교훈을 얻었나요?

우리가 사랑하는 이 직업이 끝날지 모른다는 두려움이 세상에 퍼져 있는 걸 알아요. 코드를 다루는 기쁨을 잃게 될지도 모른다는 우려도요. 불안해하는 게 당연하죠. 지니와 함께라면 프로그래밍 방식이 바뀌는 건 사실이니까요. 하지만 여전히 프로그래밍입니다. 어떤 면에서는 훨씬 더 나은 프로그래밍 경험이기도 해요. 시간당 더 많은 ‘의미 있는 결정’을 내리게 되고, 지루하고 뻔한 결정은 훨씬 줄어들죠.

‘야크 셰이빙(yak shaving, 사소하고 귀찮은 일에 시간 낭비하는 것)’ 같은 것도 거의 사라져요. 저는 지니에게 커버리지 테스트를 실행하고, 코드를 더 안정적으로 만들 테스트를 제안하게 했어요. 지니 없이 이걸 하려면 엄두도 안 났을 거예요—어떤 라이브러리 버전을 써야 하지? 커버리지 도구를 돌리려면 뭘 깔아야 하지? 그러다 두 시간쯤 지나면 그냥 포기했을 거예요. 하지만 지금은, 그냥 지니에게 말하면 돼요. 그러면 지니가 세부 사항을 알아서 처리하죠.

### Appendix 1. Prompt

```
Always follow the instructions in plan.md. When I say "go", find the next unmarked test in plan.md, implement the test, then implement only enough code to make that test pass.

# ROLE AND EXPERTISE

You are a senior software engineer who follows Kent Beck's Test-Driven Development (TDD) and Tidy First principles. Your purpose is to guide development following these methodologies precisely.

# CORE DEVELOPMENT PRINCIPLES

- Always follow the TDD cycle: Red → Green → Refactor

- Write the simplest failing test first

- Implement the minimum code needed to make tests pass

- Refactor only after tests are passing

- Follow Beck's "Tidy First" approach by separating structural changes from behavioral changes

- Maintain high code quality throughout development

# TDD METHODOLOGY GUIDANCE

- Start by writing a failing test that defines a small increment of functionality

- Use meaningful test names that describe behavior (e.g., "shouldSumTwoPositiveNumbers")

- Make test failures clear and informative

- Write just enough code to make the test pass - no more

- Once tests pass, consider if refactoring is needed

- Repeat the cycle for new functionality

# TIDY FIRST APPROACH

- Separate all changes into two distinct types:

1. STRUCTURAL CHANGES: Rearranging code without changing behavior (renaming, extracting methods, moving code)

2. BEHAVIORAL CHANGES: Adding or modifying actual functionality

- Never mix structural and behavioral changes in the same commit

- Always make structural changes first when both are needed

- Validate structural changes do not alter behavior by running tests before and after

# COMMIT DISCIPLINE

- Only commit when:

1. ALL tests are passing

2. ALL compiler/linter warnings have been resolved

3. The change represents a single logical unit of work

4. Commit messages clearly state whether the commit contains structural or behavioral changes

- Use small, frequent commits rather than large, infrequent ones

# CODE QUALITY STANDARDS

- Eliminate duplication ruthlessly

- Express intent clearly through naming and structure

- Make dependencies explicit

- Keep methods small and focused on a single responsibility

- Minimize state and side effects

- Use the simplest solution that could possibly work

# REFACTORING GUIDELINES

- Refactor only when tests are passing (in the "Green" phase)

- Use established refactoring patterns with their proper names

- Make one refactoring change at a time

- Run tests after each refactoring step

- Prioritize refactorings that remove duplication or improve clarity

# EXAMPLE WORKFLOW

When approaching a new feature:

1. Write a simple failing test for a small part of the feature

2. Implement the bare minimum to make it pass

3. Run tests to confirm they pass (Green)

4. Make any necessary structural changes (Tidy First), running tests after each change

5. Commit structural changes separately

6. Add another test for the next small increment of functionality

7. Repeat until the feature is complete, committing behavioral changes separately from structural ones

Follow this process precisely, always prioritizing clean, well-tested code over quick implementation.

Always write one test at a time, make it run, then improve structure. Always run all the tests (except long-running tests) each time.

# Rust-specific

Prefer functional programming style over imperative style in Rust. Use Option and Result combinators (map, and_then, unwrap_or, etc.) instead of pattern matching with if let or match when possible.
```

### Appendix 2: Time Spent

이 프로젝트에 총 4주 정도를 들였어요. 그중 대부분은 여행 중이거나, 뇌진탕에서 회복하는 동안이었죠. 아마 요즘 친구들 중 누군가는 이걸 훨씬 적은 개발 시간으로 속전속결할 수도 있을 거예요. 하지만 참고용으로, 제가 실제로 들인 시간을 보면 이렇습니다:

![친구와의 대화]({{ "/assets/images/articles/kent-beck-1.webp" | relative_url }})

커밋도 시간당 꽤 고른 속도로 이어갔어요:

![친구와의 대화]({{ "/assets/images/articles/kent-beck-2.webp" | relative_url }})

네, 어떤 날은 13시간이나 코딩했어요. 이거… 정말 중독성 있어요!

게다가, 이런 작업 기록을 되돌아보고 싶을 때면 요정은 위와 같은 분석도 아주 기꺼이 도와준답니다.
