<script lang="ts" setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu';
import { Logo } from '~/components/ui/logo';
import Button from './ui/button/Button.vue';

const { locale, locales, setLocale } = useI18n();
const localePath = useLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
<template>
  <div class="border-b border-border py-8">
    <div class="container flex justify-between items-center">
      <NuxtLink :to="localePath('index')"><Logo /></NuxtLink>
      <div class="flex gap-12">
        <NuxtLink :to="localePath('/services')">{{
          $t('navlink_services')
        }}</NuxtLink>
        <NuxtLink :to="localePath('/about')">{{
          $t('navlink_about_us')
        }}</NuxtLink>
      </div>
      <div class="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">{{ $t('locale') }}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56">
            <DropdownMenuItem
              v-for="locale in availableLocales"
              :key="locale.code"
              @click.prevent.stop="setLocale(locale.code)"
            >
              <User class="mr-2 h-4 w-4" />
              <span>{{ locale.name }}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <NuxtLink :to="localePath('/contacts')">
          <Button variant="outline">{{ $t('navlink_contact_us') }}</Button>
        </NuxtLink>

        <NuxtLink :to="localePath('/signin')">
          <Button>{{ $t('navlink_signin') }}</Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
